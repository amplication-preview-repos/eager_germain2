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
  Backlinks as PrismaBacklinks,
  UrlAnalysis as PrismaUrlAnalysis,
} from "@prisma/client";

export class BacklinksServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BacklinksCountArgs, "select">
  ): Promise<number> {
    return this.prisma.backlinks.count(args);
  }

  async backlinksItems(
    args: Prisma.BacklinksFindManyArgs
  ): Promise<PrismaBacklinks[]> {
    return this.prisma.backlinks.findMany(args);
  }
  async backlinks(
    args: Prisma.BacklinksFindUniqueArgs
  ): Promise<PrismaBacklinks | null> {
    return this.prisma.backlinks.findUnique(args);
  }
  async createBacklinks(
    args: Prisma.BacklinksCreateArgs
  ): Promise<PrismaBacklinks> {
    return this.prisma.backlinks.create(args);
  }
  async updateBacklinks(
    args: Prisma.BacklinksUpdateArgs
  ): Promise<PrismaBacklinks> {
    return this.prisma.backlinks.update(args);
  }
  async deleteBacklinks(
    args: Prisma.BacklinksDeleteArgs
  ): Promise<PrismaBacklinks> {
    return this.prisma.backlinks.delete(args);
  }

  async getUrlAnalysis(parentId: string): Promise<PrismaUrlAnalysis | null> {
    return this.prisma.backlinks
      .findUnique({
        where: { id: parentId },
      })
      .urlAnalysis();
  }
}