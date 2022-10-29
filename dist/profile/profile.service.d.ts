import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileInput } from 'src/types/graphql';
export declare class ProfileService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ userEmail }: CreateProfileInput): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Profile[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
    update(id: number): string;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile, never>;
}
