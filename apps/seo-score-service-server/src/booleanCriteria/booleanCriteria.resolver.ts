import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BooleanCriteriaResolverBase } from "./base/booleanCriteria.resolver.base";
import { BooleanCriteria } from "./base/BooleanCriteria";
import { BooleanCriteriaService } from "./booleanCriteria.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BooleanCriteria)
export class BooleanCriteriaResolver extends BooleanCriteriaResolverBase {
  constructor(
    protected readonly service: BooleanCriteriaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
