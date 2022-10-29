import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBioFactorInput, UpdateBioFactorInput } from 'src/types/graphql';
export declare class BioFactorService {
    private schema;
    constructor(schema: PrismaService);
    create({ type, name, description, profileId }: CreateBioFactorInput): import(".prisma/client").Prisma.Prisma__BioFactorClient<import(".prisma/client").BioFactor, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").BioFactor[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__BioFactorClient<import(".prisma/client").BioFactor, never>;
    update(id: number, { type, name, description }: UpdateBioFactorInput): import(".prisma/client").Prisma.Prisma__BioFactorClient<import(".prisma/client").BioFactor, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BioFactorClient<import(".prisma/client").BioFactor, never>;
}
