import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UrlAnalysisModuleBase } from "./base/urlAnalysis.module.base";
import { UrlAnalysisService } from "./urlAnalysis.service";
import { UrlAnalysisController } from "./urlAnalysis.controller";
import { UrlAnalysisResolver } from "./urlAnalysis.resolver";

@Module({
  imports: [UrlAnalysisModuleBase, forwardRef(() => AuthModule)],
  controllers: [UrlAnalysisController],
  providers: [UrlAnalysisService, UrlAnalysisResolver],
  exports: [UrlAnalysisService],
})
export class UrlAnalysisModule {}
