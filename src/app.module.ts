import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProfileModule } from './profile/profile.module';
import { BioFactorModule } from './bio-factor/bio-factor.module';
import { GraphQLDateTime } from 'graphql-iso-date';
import { RoutineModule } from './routine/routine.module';
import { StepModule } from './step/step.module';
import { ArticleModule } from './article/article.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLDateTime },
      definitions: {
        path: join(process.cwd(), 'src/types/graphql.ts'),
        outputAs: 'class',
      },
    }),
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    PrismaModule,
    UserModule,
    ProfileModule,
    BioFactorModule,
    RoutineModule,
    StepModule,
    ArticleModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
