import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComparativeCriteriaResolverBase } from "./base/comparativeCriteria.resolver.base";
import { ComparativeCriteria } from "./base/ComparativeCriteria";
import { ComparativeCriteriaService } from "./comparativeCriteria.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComparativeCriteria)
export class ComparativeCriteriaResolver extends ComparativeCriteriaResolverBase {
  constructor(
    protected readonly service: ComparativeCriteriaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
