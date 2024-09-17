import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PageSpeedModuleBase } from "./base/pageSpeed.module.base";
import { PageSpeedService } from "./pageSpeed.service";
import { PageSpeedController } from "./pageSpeed.controller";
import { PageSpeedResolver } from "./pageSpeed.resolver";

@Module({
  imports: [PageSpeedModuleBase, forwardRef(() => AuthModule)],
  controllers: [PageSpeedController],
  providers: [PageSpeedService, PageSpeedResolver],
  exports: [PageSpeedService],
})
export class PageSpeedModule {}
