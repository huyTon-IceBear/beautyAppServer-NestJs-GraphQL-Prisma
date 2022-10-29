import { CreateProductInput, UpdateProductInput } from 'src/types/graphql';
import { ProductService } from './product.service';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductInput: CreateProductInput): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    update(updateProductInput: UpdateProductInput): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
}
