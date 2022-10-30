"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const apollo_server_core_1 = require("apollo-server-core");
const path_1 = require("path");
const prisma_module_1 = require("./prisma/prisma.module");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const profile_module_1 = require("./profile/profile.module");
const bio_factor_module_1 = require("./bio-factor/bio-factor.module");
const graphql_iso_date_1 = require("graphql-iso-date");
const routine_module_1 = require("./routine/routine.module");
const step_module_1 = require("./step/step.module");
const article_module_1 = require("./article/article.module");
const product_module_1 = require("./product/product.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
                typePaths: ['./**/*.graphql'],
                resolvers: { DateTime: graphql_iso_date_1.GraphQLDateTime },
                definitions: {
                    path: (0, path_1.join)(process.cwd(), 'src/types/graphql.ts'),
                    outputAs: 'class',
                },
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
            prisma_module_1.PrismaModule,
            user_module_1.UserModule,
            profile_module_1.ProfileModule,
            bio_factor_module_1.BioFactorModule,
            routine_module_1.RoutineModule,
            step_module_1.StepModule,
            article_module_1.ArticleModule,
            product_module_1.ProductModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map