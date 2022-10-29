import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoutineInput } from 'src/types/graphql';

@Injectable()
export class RoutineService {
  constructor(private prisma: PrismaService) {}
  create({ id }: CreateRoutineInput) {
    return this.prisma.routine.create({
      data: { id },
    });
  }

  findAll() {
    return `This action returns all routine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} routine`;
  }

  remove(id: number) {
    return `This action removes a #${id} routine`;
  }
}
