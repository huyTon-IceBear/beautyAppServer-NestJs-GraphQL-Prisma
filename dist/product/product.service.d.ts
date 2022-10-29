import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductInput, UpdateProductInput } from 'src/types/graphql';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ name, description, price, stepId }: CreateProductInput): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    update(id: number, { name, description, price }: UpdateProductInput): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
}
