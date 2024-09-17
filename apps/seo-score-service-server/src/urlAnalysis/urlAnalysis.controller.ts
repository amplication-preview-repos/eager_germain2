import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UrlAnalysisService } from "./urlAnalysis.service";
import { UrlAnalysisControllerBase } from "./base/urlAnalysis.controller.base";

@swagger.ApiTags("urlAnalyses")
@common.Controller("urlAnalyses")
export class UrlAnalysisController extends UrlAnalysisControllerBase {
  constructor(
    protected readonly service: UrlAnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
