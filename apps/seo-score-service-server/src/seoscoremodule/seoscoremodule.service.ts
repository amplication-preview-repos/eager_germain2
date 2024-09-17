import { Injectable } from "@nestjs/common";
import { SeoScoreInputDto } from "../seoScoreModule/SeoScoreInputDto";
import { SeoScoreOutputDto } from "../seoScoreModule/SeoScoreOutputDto";

@Injectable()
export class SeoScoreModuleService {
  constructor() {}
  async CreateSeoScoreTask(args: SeoScoreInputDto): Promise<SeoScoreOutputDto> {
    throw new Error("Not implemented");
  }
  async GetSeoScoreResult(args: string): Promise<SeoScoreOutputDto> {
    throw new Error("Not implemented");
  }
}
