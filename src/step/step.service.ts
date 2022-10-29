import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStepInput, UpdateStepInput } from 'src/types/graphql';

@Injectable()
export class StepService {
  constructor(private prisma: PrismaService) {}
  create({ complete, name, description, routineId }: CreateStepInput) {
    return this.prisma.step.create({
      data: {
        complete,
        name,
        description,
        routineId,
      },
    });
  }

  findAll() {
    return this.prisma.step.findMany();
  }

  findOne(id: number) {
    return this.prisma.step.findUnique({
      where: { id },
    });
  }

  update(id: number, { name, description, complete }: UpdateStepInput) {
    return this.prisma.step.update({
      where: { id },
      data: {
        name,
        description,
        complete,
      },
    });
  }

  remove(id: number) {
    return this.prisma.step.delete({
      where: { id },
    });
  }
}
