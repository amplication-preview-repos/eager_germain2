import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BooleanCriteriaService } from "./booleanCriteria.service";
import { BooleanCriteriaControllerBase } from "./base/booleanCriteria.controller.base";

@swagger.ApiTags("booleanCriteria")
@common.Controller("booleanCriteria")
export class BooleanCriteriaController extends BooleanCriteriaControllerBase {
  constructor(
    protected readonly service: BooleanCriteriaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
