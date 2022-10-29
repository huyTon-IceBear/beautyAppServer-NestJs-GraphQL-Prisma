import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStepInput, UpdateStepInput } from 'src/types/graphql';
export declare class StepService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ complete, name, description, routineId }: CreateStepInput): import(".prisma/client").Prisma.Prisma__StepClient<import(".prisma/client").Step, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Step[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__StepClient<import(".prisma/client").Step, never>;
    update(id: number, { name, description, complete }: UpdateStepInput): import(".prisma/client").Prisma.Prisma__StepClient<import(".prisma/client").Step, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__StepClient<import(".prisma/client").Step, never>;
}
