import { Module } from "@nestjs/common";
import { UrlAnalysisModule } from "./urlAnalysis/urlAnalysis.module";
import { ComparativeCriteriaModule } from "./comparativeCriteria/comparativeCriteria.module";
import { BooleanCriteriaModule } from "./booleanCriteria/booleanCriteria.module";
import { SeoTaskModule } from "./seoTask/seoTask.module";
import { PageSpeedModule } from "./pageSpeed/pageSpeed.module";
import { BacklinksModule } from "./backlinks/backlinks.module";
import { UserModule } from "./user/user.module";
import { SeoScoreModuleModule } from "./seoscoremodule/seoscoremodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    ACLModule,
    AuthModule,
    UrlAnalysisModule,
    ComparativeCriteriaModule,
    BooleanCriteriaModule,
    SeoTaskModule,
    PageSpeedModule,
    BacklinksModule,
    UserModule,
    SeoScoreModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
