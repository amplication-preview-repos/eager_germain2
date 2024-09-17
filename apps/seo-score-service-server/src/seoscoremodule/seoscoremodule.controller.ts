import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SeoScoreModuleService } from "./seoscoremodule.service";
import { SeoScoreInputDto } from "../seoScoreModule/SeoScoreInputDto";
import { SeoScoreOutputDto } from "../seoScoreModule/SeoScoreOutputDto";

@swagger.ApiTags("seoScoreModules")
@common.Controller("seoScoreModules")
export class SeoScoreModuleController {
  constructor(protected readonly service: SeoScoreModuleService) {}

  @common.Post("/seo-score")
  @swagger.ApiOkResponse({
    type: SeoScoreOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSeoScoreTask(
    @common.Body()
    body: SeoScoreInputDto
  ): Promise<SeoScoreOutputDto> {
        return this.service.CreateSeoScoreTask(body);
      }

  @common.Get("/seo-score/:id")
  @swagger.ApiOkResponse({
    type: SeoScoreOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetSeoScoreResult(
    @common.Body()
    body: string
  ): Promise<SeoScoreOutputDto> {
        return this.service.GetSeoScoreResult(body);
      }
}
