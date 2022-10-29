import { CreateProfileInput, UpdateProfileInput } from 'src/types/graphql';
import { ProfileService } from './profile.service';
export declare class ProfileResolver {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileInput: CreateProfileInput): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Profile[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    update(updateProfileInput: UpdateProfileInput): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
}
