import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateRoutineInput } from 'src/types/graphql';
import { RoutineService } from './routine.service';

@Resolver('Routine')
export class RoutineResolver {
  constructor(private readonly routineService: RoutineService) {}

  @Mutation('createRoutine')
  create(@Args('createRoutineInput') createRoutineInput: CreateRoutineInput) {
    return this.routineService.create(createRoutineInput);
  }

  @Query('routine')
  findAll() {
    return this.routineService.findAll();
  }

  @Query('routine')
  findOne(@Args('id') id: number) {
    return this.routineService.findOne(id);
  }

  @Mutation('removeRoutine')
  remove(@Args('id') id: number) {
    return this.routineService.remove(id);
  }
}
