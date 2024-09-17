import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SeoTaskServiceBase } from "./base/seoTask.service.base";

@Injectable()
export class SeoTaskService extends SeoTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
