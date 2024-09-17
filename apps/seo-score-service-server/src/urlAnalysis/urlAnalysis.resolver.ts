import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UrlAnalysisResolverBase } from "./base/urlAnalysis.resolver.base";
import { UrlAnalysis } from "./base/UrlAnalysis";
import { UrlAnalysisService } from "./urlAnalysis.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UrlAnalysis)
export class UrlAnalysisResolver extends UrlAnalysisResolverBase {
  constructor(
    protected readonly service: UrlAnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
