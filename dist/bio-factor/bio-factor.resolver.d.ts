import { BioFactorService } from './bio-factor.service';
import { CreateBioFactorInput, UpdateBioFactorInput } from 'src/types/graphql';
export declare class BioFactorResolver {
    private readonly bioFactorService;
    constructor(bioFactorService: BioFactorService);
    create(createBioFactorInput: CreateBioFactorInput): import(".prisma/client").Prisma.Prisma__BioFactorClient<import(".prisma/client").BioFactor, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").BioFactor[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__BioFactorClient<import(".prisma/client").BioFactor, never>;
    update(updateBioFactorInput: UpdateBioFactorInput): import(".prisma/client").Prisma.Prisma__BioFactorClient<import(".prisma/client").BioFactor, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BioFactorClient<import(".prisma/client").BioFactor, never>;
}
