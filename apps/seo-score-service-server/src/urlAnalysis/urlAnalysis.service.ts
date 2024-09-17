import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UrlAnalysisServiceBase } from "./base/urlAnalysis.service.base";

@Injectable()
export class UrlAnalysisService extends UrlAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
