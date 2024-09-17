import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BooleanCriteriaServiceBase } from "./base/booleanCriteria.service.base";

@Injectable()
export class BooleanCriteriaService extends BooleanCriteriaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
