import { CreateStepInput, UpdateStepInput } from 'src/types/graphql';
import { StepService } from './step.service';
export declare class StepResolver {
    private readonly stepService;
    constructor(stepService: StepService);
    create(createStepInput: CreateStepInput): import(".prisma/client").Prisma.Prisma__StepClient<import(".prisma/client").Step, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Step[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__StepClient<import(".prisma/client").Step, never>;
    update(updateStepInput: UpdateStepInput): import(".prisma/client").Prisma.Prisma__StepClient<import(".prisma/client").Step, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__StepClient<import(".prisma/client").Step, never>;
}
