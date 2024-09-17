import { Module } from "@nestjs/common";
import { SeoScoreModuleService } from "./seoscoremodule.service";
import { SeoScoreModuleController } from "./seoscoremodule.controller";
import { SeoScoreModuleResolver } from "./seoscoremodule.resolver";

@Module({
  controllers: [SeoScoreModuleController],
  providers: [SeoScoreModuleService, SeoScoreModuleResolver],
  exports: [SeoScoreModuleService],
})
export class SeoScoreModuleModule {}
