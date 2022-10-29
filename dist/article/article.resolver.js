"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../types/graphql");
const article_service_1 = require("./article.service");
let ArticleResolver = class ArticleResolver {
    constructor(articleService) {
        this.articleService = articleService;
    }
    create(createArticleInput) {
        return this.articleService.create(createArticleInput);
    }
    findAll() {
        return this.articleService.findAll();
    }
    findOne(id) {
        return this.articleService.findOne(id);
    }
    update(updateArticleInput) {
        return this.articleService.update(updateArticleInput.id, updateArticleInput);
    }
    remove(id) {
        return this.articleService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)('createArticle'),
    __param(0, (0, graphql_1.Args)('createArticleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.CreateArticleInput]),
    __metadata("design:returntype", void 0)
], ArticleResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('article'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticleResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('article'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticleResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateArticle'),
    __param(0, (0, graphql_1.Args)('updateArticleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.UpdateArticleInput]),
    __metadata("design:returntype", void 0)
], ArticleResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeArticle'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticleResolver.prototype, "remove", null);
ArticleResolver = __decorate([
    (0, graphql_1.Resolver)('Article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleResolver);
exports.ArticleResolver = ArticleResolver;
//# sourceMappingURL=article.resolver.js.map