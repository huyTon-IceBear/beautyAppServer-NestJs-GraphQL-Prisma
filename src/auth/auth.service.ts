import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Login, RefreshToken, Register } from 'src/types/graphql';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async register({ name, email, password }: Register) {
    try {
      //generate hash pass
      const hash = await argon.hash(password);

      //save user
      const user = await this.prisma.user.create({
        data: {
          name,
          email,
          password: hash,
          role: Role.USER,
        },
      });

      return this.signToken(user.id, user.email, user.role);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async login({ email, password }: Login) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon.verify(user.password, password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    return this.signToken(user.id, user.email, user.role);
  }

  refreshToken({ token }: RefreshToken) {
    try {
      const { userId, email, role } = this.jwt.verify(token, {
        secret: this.config.get('REFRESH_SECRET'),
      });

      return this.signToken(userId, email, role);
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async signToken(
    userId: number,
    email: string,
    role: Role,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = {
      sub: userId,
      email,
      role,
    };

    const accessToken = await this.jwt.signAsync(payload, {
      expiresIn: '30m',
      secret: this.config.get('JWT_SECRET'),
    });

    const refreshToken = await this.jwt.signAsync(payload, {
      expiresIn: '12h',
      secret: this.config.get('REFRESH_SECRET'),
    });

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
