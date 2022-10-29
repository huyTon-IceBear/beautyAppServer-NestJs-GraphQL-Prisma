import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleInput, UpdateArticleInput } from 'src/types/graphql';
export declare class ArticleService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ description, link, routineId }: CreateArticleInput): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    update(id: number, { description, link }: UpdateArticleInput): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
}
