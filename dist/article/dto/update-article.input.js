"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArticleInput = void 0;
const create_article_input_1 = require("./create-article.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateArticleInput extends (0, mapped_types_1.PartialType)(create_article_input_1.CreateArticleInput) {
}
exports.UpdateArticleInput = UpdateArticleInput;
//# sourceMappingURL=update-article.input.js.map