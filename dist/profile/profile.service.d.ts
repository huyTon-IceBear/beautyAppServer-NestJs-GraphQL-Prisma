import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileInput, UpdateProfileInput } from 'src/types/graphql';
export declare class ProfileService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ userEmail, age, gender }: CreateProfileInput): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Profile[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    update(id: number, { age, gender }: UpdateProfileInput): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
}
