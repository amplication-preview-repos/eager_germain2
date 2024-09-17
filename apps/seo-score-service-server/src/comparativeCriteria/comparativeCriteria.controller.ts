import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComparativeCriteriaService } from "./comparativeCriteria.service";
import { ComparativeCriteriaControllerBase } from "./base/comparativeCriteria.controller.base";

@swagger.ApiTags("comparativeCriteria")
@common.Controller("comparativeCriteria")
export class ComparativeCriteriaController extends ComparativeCriteriaControllerBase {
  constructor(
    protected readonly service: ComparativeCriteriaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
