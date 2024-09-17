import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComparativeCriteriaServiceBase } from "./base/comparativeCriteria.service.base";

@Injectable()
export class ComparativeCriteriaService extends ComparativeCriteriaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
