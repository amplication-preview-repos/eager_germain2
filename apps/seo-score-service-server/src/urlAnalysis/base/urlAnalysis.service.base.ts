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
  UrlAnalysis as PrismaUrlAnalysis,
  Backlinks as PrismaBacklinks,
  BooleanCriteria as PrismaBooleanCriteria,
  ComparativeCriteria as PrismaComparativeCriteria,
  PageSpeed as PrismaPageSpeed,
} from "@prisma/client";

export class UrlAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UrlAnalysisCountArgs, "select">
  ): Promise<number> {
    return this.prisma.urlAnalysis.count(args);
  }

  async urlAnalyses(
    args: Prisma.UrlAnalysisFindManyArgs
  ): Promise<PrismaUrlAnalysis[]> {
    return this.prisma.urlAnalysis.findMany(args);
  }
  async urlAnalysis(
    args: Prisma.UrlAnalysisFindUniqueArgs
  ): Promise<PrismaUrlAnalysis | null> {
    return this.prisma.urlAnalysis.findUnique(args);
  }
  async createUrlAnalysis(
    args: Prisma.UrlAnalysisCreateArgs
  ): Promise<PrismaUrlAnalysis> {
    return this.prisma.urlAnalysis.create(args);
  }
  async updateUrlAnalysis(
    args: Prisma.UrlAnalysisUpdateArgs
  ): Promise<PrismaUrlAnalysis> {
    return this.prisma.urlAnalysis.update(args);
  }
  async deleteUrlAnalysis(
    args: Prisma.UrlAnalysisDeleteArgs
  ): Promise<PrismaUrlAnalysis> {
    return this.prisma.urlAnalysis.delete(args);
  }

  async findBacklinksItems(
    parentId: string,
    args: Prisma.BacklinksFindManyArgs
  ): Promise<PrismaBacklinks[]> {
    return this.prisma.urlAnalysis
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .backlinksItems(args);
  }

  async findBooleanCriteriaItems(
    parentId: string,
    args: Prisma.BooleanCriteriaFindManyArgs
  ): Promise<PrismaBooleanCriteria[]> {
    return this.prisma.urlAnalysis
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .booleanCriteriaItems(args);
  }

  async findComparativeCriteriaItems(
    parentId: string,
    args: Prisma.ComparativeCriteriaFindManyArgs
  ): Promise<PrismaComparativeCriteria[]> {
    return this.prisma.urlAnalysis
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comparativeCriteriaItems(args);
  }

  async findPageSpeeds(
    parentId: string,
    args: Prisma.PageSpeedFindManyArgs
  ): Promise<PrismaPageSpeed[]> {
    return this.prisma.urlAnalysis
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pageSpeeds(args);
  }
}
