/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ComparativeCriteriaService } from "../comparativeCriteria.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ComparativeCriteriaCreateInput } from "./ComparativeCriteriaCreateInput";
import { ComparativeCriteria } from "./ComparativeCriteria";
import { ComparativeCriteriaFindManyArgs } from "./ComparativeCriteriaFindManyArgs";
import { ComparativeCriteriaWhereUniqueInput } from "./ComparativeCriteriaWhereUniqueInput";
import { ComparativeCriteriaUpdateInput } from "./ComparativeCriteriaUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ComparativeCriteriaControllerBase {
  constructor(
    protected readonly service: ComparativeCriteriaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ComparativeCriteria })
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createComparativeCriteria(
    @common.Body() data: ComparativeCriteriaCreateInput
  ): Promise<ComparativeCriteria> {
    return await this.service.createComparativeCriteria({
      data: {
        ...data,

        urlAnalysis: data.urlAnalysis
          ? {
              connect: data.urlAnalysis,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        criterionName: true,
        id: true,
        rank: true,
        score: true,
        updatedAt: true,

        urlAnalysis: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ComparativeCriteria] })
  @ApiNestedQuery(ComparativeCriteriaFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async comparativeCriteriaItems(
    @common.Req() request: Request
  ): Promise<ComparativeCriteria[]> {
    const args = plainToClass(ComparativeCriteriaFindManyArgs, request.query);
    return this.service.comparativeCriteriaItems({
      ...args,
      select: {
        createdAt: true,
        criterionName: true,
        id: true,
        rank: true,
        score: true,
        updatedAt: true,

        urlAnalysis: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ComparativeCriteria })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async comparativeCriteria(
    @common.Param() params: ComparativeCriteriaWhereUniqueInput
  ): Promise<ComparativeCriteria | null> {
    const result = await this.service.comparativeCriteria({
      where: params,
      select: {
        createdAt: true,
        criterionName: true,
        id: true,
        rank: true,
        score: true,
        updatedAt: true,

        urlAnalysis: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ComparativeCriteria })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateComparativeCriteria(
    @common.Param() params: ComparativeCriteriaWhereUniqueInput,
    @common.Body() data: ComparativeCriteriaUpdateInput
  ): Promise<ComparativeCriteria | null> {
    try {
      return await this.service.updateComparativeCriteria({
        where: params,
        data: {
          ...data,

          urlAnalysis: data.urlAnalysis
            ? {
                connect: data.urlAnalysis,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          criterionName: true,
          id: true,
          rank: true,
          score: true,
          updatedAt: true,

          urlAnalysis: {
            select: {
              id: true,
            },
          },

          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ComparativeCriteria })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteComparativeCriteria(
    @common.Param() params: ComparativeCriteriaWhereUniqueInput
  ): Promise<ComparativeCriteria | null> {
    try {
      return await this.service.deleteComparativeCriteria({
        where: params,
        select: {
          createdAt: true,
          criterionName: true,
          id: true,
          rank: true,
          score: true,
          updatedAt: true,

          urlAnalysis: {
            select: {
              id: true,
            },
          },

          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}