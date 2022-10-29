import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleInput, UpdateArticleInput } from 'src/types/graphql';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}
  create({ description, link, routineId }: CreateArticleInput) {
    return this.prisma.article.create({
      data: {
        description,
        link,
        routineId,
      },
    });
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({
      where: { id },
    });
  }

  update(id: number, { description, link }: UpdateArticleInput) {
    return this.prisma.article.update({
      where: { id },
      data: { description, link },
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
