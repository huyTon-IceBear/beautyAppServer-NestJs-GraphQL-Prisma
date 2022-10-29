import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileInput, UpdateProfileInput } from 'src/types/graphql';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  create({ userEmail }: CreateProfileInput) {
    return this.prisma.profile.create({
      data: { userEmail },
    });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: number) {
    return this.prisma.profile.findUnique({
      where: { id },
    });
  }

  update(id: number) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
