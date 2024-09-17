import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BacklinksService } from "./backlinks.service";
import { BacklinksControllerBase } from "./base/backlinks.controller.base";

@swagger.ApiTags("backlinks")
@common.Controller("backlinks")
export class BacklinksController extends BacklinksControllerBase {
  constructor(
    protected readonly service: BacklinksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
