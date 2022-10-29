import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateArticleInput, UpdateArticleInput } from 'src/types/graphql';
import { ArticleService } from './article.service';

@Resolver('Article')
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Mutation('createArticle')
  create(@Args('createArticleInput') createArticleInput: CreateArticleInput) {
    return this.articleService.create(createArticleInput);
  }

  @Query('article')
  findAll() {
    return this.articleService.findAll();
  }

  @Query('article')
  findOne(@Args('id') id: number) {
    return this.articleService.findOne(id);
  }

  @Mutation('updateArticle')
  update(@Args('updateArticleInput') updateArticleInput: UpdateArticleInput) {
    return this.articleService.update(
      updateArticleInput.id,
      updateArticleInput,
    );
  }

  @Mutation('removeArticle')
  remove(@Args('id') id: number) {
    return this.articleService.remove(id);
  }
}
