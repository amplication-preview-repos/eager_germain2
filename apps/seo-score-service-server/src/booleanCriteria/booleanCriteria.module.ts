import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BooleanCriteriaModuleBase } from "./base/booleanCriteria.module.base";
import { BooleanCriteriaService } from "./booleanCriteria.service";
import { BooleanCriteriaController } from "./booleanCriteria.controller";
import { BooleanCriteriaResolver } from "./booleanCriteria.resolver";

@Module({
  imports: [BooleanCriteriaModuleBase, forwardRef(() => AuthModule)],
  controllers: [BooleanCriteriaController],
  providers: [BooleanCriteriaService, BooleanCriteriaResolver],
  exports: [BooleanCriteriaService],
})
export class BooleanCriteriaModule {}
