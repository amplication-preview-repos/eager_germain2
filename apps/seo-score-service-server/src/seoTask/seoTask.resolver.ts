import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SeoTaskResolverBase } from "./base/seoTask.resolver.base";
import { SeoTask } from "./base/SeoTask";
import { SeoTaskService } from "./seoTask.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SeoTask)
export class SeoTaskResolver extends SeoTaskResolverBase {
  constructor(
    protected readonly service: SeoTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
