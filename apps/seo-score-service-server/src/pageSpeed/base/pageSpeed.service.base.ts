/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PageSpeed as PrismaPageSpeed,
  UrlAnalysis as PrismaUrlAnalysis,
} from "@prisma/client";

export class PageSpeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PageSpeedCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pageSpeed.count(args);
  }

  async pageSpeeds(
    args: Prisma.PageSpeedFindManyArgs
  ): Promise<PrismaPageSpeed[]> {
    return this.prisma.pageSpeed.findMany(args);
  }
  async pageSpeed(
    args: Prisma.PageSpeedFindUniqueArgs
  ): Promise<PrismaPageSpeed | null> {
    return this.prisma.pageSpeed.findUnique(args);
  }
  async createPageSpeed(
    args: Prisma.PageSpeedCreateArgs
  ): Promise<PrismaPageSpeed> {
    return this.prisma.pageSpeed.create(args);
  }
  async updatePageSpeed(
    args: Prisma.PageSpeedUpdateArgs
  ): Promise<PrismaPageSpeed> {
    return this.prisma.pageSpeed.update(args);
  }
  async deletePageSpeed(
    args: Prisma.PageSpeedDeleteArgs
  ): Promise<PrismaPageSpeed> {
    return this.prisma.pageSpeed.delete(args);
  }

  async getUrlAnalysis(parentId: string): Promise<PrismaUrlAnalysis | null> {
    return this.prisma.pageSpeed
      .findUnique({
        where: { id: parentId },
      })
      .urlAnalysis();
  }
}