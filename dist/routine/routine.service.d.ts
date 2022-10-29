import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoutineInput } from 'src/types/graphql';
export declare class RoutineService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ id }: CreateRoutineInput): import(".prisma/client").Prisma.Prisma__RoutineClient<import(".prisma/client").Routine, never>;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
