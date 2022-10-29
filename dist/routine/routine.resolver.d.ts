import { CreateRoutineInput } from 'src/types/graphql';
import { RoutineService } from './routine.service';
export declare class RoutineResolver {
    private readonly routineService;
    constructor(routineService: RoutineService);
    create(createRoutineInput: CreateRoutineInput): import(".prisma/client").Prisma.Prisma__RoutineClient<import(".prisma/client").Routine, never>;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
