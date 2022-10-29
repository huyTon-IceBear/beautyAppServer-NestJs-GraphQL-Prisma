-- AlterTable
CREATE SEQUENCE "article_id_seq";
ALTER TABLE "Article" ALTER COLUMN "id" SET DEFAULT nextval('article_id_seq');
ALTER SEQUENCE "article_id_seq" OWNED BY "Article"."id";

-- AlterTable
CREATE SEQUENCE "product_id_seq";
ALTER TABLE "Product" ALTER COLUMN "id" SET DEFAULT nextval('product_id_seq');
ALTER SEQUENCE "product_id_seq" OWNED BY "Product"."id";

-- AlterTable
CREATE SEQUENCE "step_id_seq";
ALTER TABLE "Step" ALTER COLUMN "id" SET DEFAULT nextval('step_id_seq');
ALTER SEQUENCE "step_id_seq" OWNED BY "Step"."id";
