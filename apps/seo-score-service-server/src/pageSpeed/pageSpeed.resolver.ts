import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PageSpeedResolverBase } from "./base/pageSpeed.resolver.base";
import { PageSpeed } from "./base/PageSpeed";
import { PageSpeedService } from "./pageSpeed.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PageSpeed)
export class PageSpeedResolver extends PageSpeedResolverBase {
  constructor(
    protected readonly service: PageSpeedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
