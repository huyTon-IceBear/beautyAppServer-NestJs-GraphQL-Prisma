import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileInput, UpdateProfileInput } from 'src/types/graphql';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  create({ userEmail, age, gender }: CreateProfileInput) {
    return this.prisma.profile.create({
      data: { userEmail, age, gender },
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

  update(id: number, { age, gender, routineId }: UpdateProfileInput) {
    return this.prisma.profile.update({
      where: { id },
      data: { age, gender, routineId },
    });
  }

  remove(id: number) {
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
