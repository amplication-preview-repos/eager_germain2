import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BacklinksModuleBase } from "./base/backlinks.module.base";
import { BacklinksService } from "./backlinks.service";
import { BacklinksController } from "./backlinks.controller";
import { BacklinksResolver } from "./backlinks.resolver";

@Module({
  imports: [BacklinksModuleBase, forwardRef(() => AuthModule)],
  controllers: [BacklinksController],
  providers: [BacklinksService, BacklinksResolver],
  exports: [BacklinksService],
})
export class BacklinksModule {}
