import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PageSpeedService } from "./pageSpeed.service";
import { PageSpeedControllerBase } from "./base/pageSpeed.controller.base";

@swagger.ApiTags("pageSpeeds")
@common.Controller("pageSpeeds")
export class PageSpeedController extends PageSpeedControllerBase {
  constructor(
    protected readonly service: PageSpeedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
