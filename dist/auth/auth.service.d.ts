import { PrismaService } from 'src/prisma/prisma.service';
import { Login, RefreshToken, Register } from 'src/types/graphql';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Role } from '@prisma/client';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    register({ name, email, password }: Register): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login({ email, password }: Login): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken({ token }: RefreshToken): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    signToken(userId: number, email: string, role: Role): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
