import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComparativeCriteriaModuleBase } from "./base/comparativeCriteria.module.base";
import { ComparativeCriteriaService } from "./comparativeCriteria.service";
import { ComparativeCriteriaController } from "./comparativeCriteria.controller";
import { ComparativeCriteriaResolver } from "./comparativeCriteria.resolver";

@Module({
  imports: [ComparativeCriteriaModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComparativeCriteriaController],
  providers: [ComparativeCriteriaService, ComparativeCriteriaResolver],
  exports: [ComparativeCriteriaService],
})
export class ComparativeCriteriaModule {}
