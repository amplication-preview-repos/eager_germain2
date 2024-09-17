/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SeoTask as PrismaSeoTask } from "@prisma/client";

export class SeoTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SeoTaskCountArgs, "select">): Promise<number> {
    return this.prisma.seoTask.count(args);
  }

  async seoTasks(args: Prisma.SeoTaskFindManyArgs): Promise<PrismaSeoTask[]> {
    return this.prisma.seoTask.findMany(args);
  }
  async seoTask(
    args: Prisma.SeoTaskFindUniqueArgs
  ): Promise<PrismaSeoTask | null> {
    return this.prisma.seoTask.findUnique(args);
  }
  async createSeoTask(args: Prisma.SeoTaskCreateArgs): Promise<PrismaSeoTask> {
    return this.prisma.seoTask.create(args);
  }
  async updateSeoTask(args: Prisma.SeoTaskUpdateArgs): Promise<PrismaSeoTask> {
    return this.prisma.seoTask.update(args);
  }
  async deleteSeoTask(args: Prisma.SeoTaskDeleteArgs): Promise<PrismaSeoTask> {
    return this.prisma.seoTask.delete(args);
  }
}
