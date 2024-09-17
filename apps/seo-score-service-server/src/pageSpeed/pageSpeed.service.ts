import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PageSpeedServiceBase } from "./base/pageSpeed.service.base";

@Injectable()
export class PageSpeedService extends PageSpeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
