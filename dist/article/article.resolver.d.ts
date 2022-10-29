import { CreateArticleInput, UpdateArticleInput } from 'src/types/graphql';
import { ArticleService } from './article.service';
export declare class ArticleResolver {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(createArticleInput: CreateArticleInput): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    update(updateArticleInput: UpdateArticleInput): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
}
