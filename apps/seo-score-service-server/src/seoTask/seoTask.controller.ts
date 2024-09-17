import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SeoTaskService } from "./seoTask.service";
import { SeoTaskControllerBase } from "./base/seoTask.controller.base";

@swagger.ApiTags("seoTasks")
@common.Controller("seoTasks")
export class SeoTaskController extends SeoTaskControllerBase {
  constructor(
    protected readonly service: SeoTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
