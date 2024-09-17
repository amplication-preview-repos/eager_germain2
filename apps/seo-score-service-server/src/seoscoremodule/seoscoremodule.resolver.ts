import * as graphql from "@nestjs/graphql";
import { SeoScoreInputDto } from "../seoScoreModule/SeoScoreInputDto";
import { SeoScoreOutputDto } from "../seoScoreModule/SeoScoreOutputDto";
import { SeoScoreModuleService } from "./seoscoremodule.service";

export class SeoScoreModuleResolver {
  constructor(protected readonly service: SeoScoreModuleService) {}

  @graphql.Mutation(() => SeoScoreOutputDto)
  async CreateSeoScoreTask(
    @graphql.Args()
    args: SeoScoreInputDto
  ): Promise<SeoScoreOutputDto> {
    return this.service.CreateSeoScoreTask(args);
  }

  @graphql.Query(() => SeoScoreOutputDto)
  async GetSeoScoreResult(
    @graphql.Args("args")
    args: string
  ): Promise<SeoScoreOutputDto> {
    return this.service.GetSeoScoreResult(args);
  }
}
