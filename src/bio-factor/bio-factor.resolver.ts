import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BioFactorService } from './bio-factor.service';
import { CreateBioFactorInput, UpdateBioFactorInput } from 'src/types/graphql';

@Resolver('BioFactor')
export class BioFactorResolver {
  constructor(private readonly bioFactorService: BioFactorService) {}

  @Mutation('createBioFactor')
  create(
    @Args('createBioFactorInput') createBioFactorInput: CreateBioFactorInput,
  ) {
    return this.bioFactorService.create(createBioFactorInput);
  }

  @Query('bioFactors')
  findAll() {
    return this.bioFactorService.findAll();
  }

  @Query('bioFactor')
  findOne(@Args('id') id: number) {
    return this.bioFactorService.findOne(id);
  }

  @Mutation('updateBioFactor')
  update(
    @Args('updateBioFactorInput') updateBioFactorInput: UpdateBioFactorInput,
  ) {
    return this.bioFactorService.update(
      updateBioFactorInput.id,
      updateBioFactorInput,
    );
  }

  @Mutation('removeBioFactor')
  remove(@Args('id') id: number) {
    return this.bioFactorService.remove(id);
  }
}
