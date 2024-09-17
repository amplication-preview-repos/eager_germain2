import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BacklinksServiceBase } from "./base/backlinks.service.base";

@Injectable()
export class BacklinksService extends BacklinksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
