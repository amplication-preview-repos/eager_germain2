import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SeoTaskModuleBase } from "./base/seoTask.module.base";
import { SeoTaskService } from "./seoTask.service";
import { SeoTaskController } from "./seoTask.controller";
import { SeoTaskResolver } from "./seoTask.resolver";

@Module({
  imports: [SeoTaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [SeoTaskController],
  providers: [SeoTaskService, SeoTaskResolver],
  exports: [SeoTaskService],
})
export class SeoTaskModule {}
