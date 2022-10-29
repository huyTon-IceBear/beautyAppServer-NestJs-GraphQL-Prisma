import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from 'src/types/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create({ name, email }: CreateUserInput) {
    return this.prisma.user.create({
      data: { name, email },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { name: true, id: false },
    });
  }

  update(id: number, { name }: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
