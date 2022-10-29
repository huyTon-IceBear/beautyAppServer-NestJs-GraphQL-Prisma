import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateProfileInput, UpdateProfileInput } from 'src/types/graphql';
import { ProfileService } from './profile.service';

@Resolver('Profile')
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Mutation('createProfile')
  create(@Args('createProfileInput') createProfileInput: CreateProfileInput) {
    return this.profileService.create(createProfileInput);
  }

  @Query('profiles')
  findAll() {
    return this.profileService.findAll();
  }

  @Query('profile')
  findOne(@Args('id') id: number) {
    return this.profileService.findOne(id);
  }

  @Mutation('updateProfile')
  update(@Args('updateProfileInput') updateProfileInput: UpdateProfileInput) {
    return this.profileService.update(
      updateProfileInput.id,
      updateProfileInput,
    );
  }

  @Mutation('removeProfile')
  remove(@Args('id') id: number) {
    return this.profileService.remove(id);
  }
}
