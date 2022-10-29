import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateStepInput, UpdateStepInput } from 'src/types/graphql';
import { StepService } from './step.service';

@Resolver('Step')
export class StepResolver {
  constructor(private readonly stepService: StepService) {}

  @Mutation('createStep')
  create(@Args('createStepInput') createStepInput: CreateStepInput) {
    return this.stepService.create(createStepInput);
  }

  @Query('step')
  findAll() {
    return this.stepService.findAll();
  }

  @Query('step')
  findOne(@Args('id') id: number) {
    return this.stepService.findOne(id);
  }

  @Mutation('updateStep')
  update(@Args('updateStepInput') updateStepInput: UpdateStepInput) {
    return this.stepService.update(updateStepInput.id, updateStepInput);
  }

  @Mutation('removeStep')
  remove(@Args('id') id: number) {
    return this.stepService.remove(id);
  }
}
