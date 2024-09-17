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
  BooleanCriteria as PrismaBooleanCriteria,
  UrlAnalysis as PrismaUrlAnalysis,
} from "@prisma/client";

export class BooleanCriteriaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BooleanCriteriaCountArgs, "select">
  ): Promise<number> {
    return this.prisma.booleanCriteria.count(args);
  }

  async booleanCriteriaItems(
    args: Prisma.BooleanCriteriaFindManyArgs
  ): Promise<PrismaBooleanCriteria[]> {
    return this.prisma.booleanCriteria.findMany(args);
  }
  async booleanCriteria(
    args: Prisma.BooleanCriteriaFindUniqueArgs
  ): Promise<PrismaBooleanCriteria | null> {
    return this.prisma.booleanCriteria.findUnique(args);
  }
  async createBooleanCriteria(
    args: Prisma.BooleanCriteriaCreateArgs
  ): Promise<PrismaBooleanCriteria> {
    return this.prisma.booleanCriteria.create(args);
  }
  async updateBooleanCriteria(
    args: Prisma.BooleanCriteriaUpdateArgs
  ): Promise<PrismaBooleanCriteria> {
    return this.prisma.booleanCriteria.update(args);
  }
  async deleteBooleanCriteria(
    args: Prisma.BooleanCriteriaDeleteArgs
  ): Promise<PrismaBooleanCriteria> {
    return this.prisma.booleanCriteria.delete(args);
  }

  async getUrlAnalysis(parentId: string): Promise<PrismaUrlAnalysis | null> {
    return this.prisma.booleanCriteria
      .findUnique({
        where: { id: parentId },
      })
      .urlAnalysis();
  }
}