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
import { BacklinksService } from "../backlinks.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BacklinksCreateInput } from "./BacklinksCreateInput";
import { Backlinks } from "./Backlinks";
import { BacklinksFindManyArgs } from "./BacklinksFindManyArgs";
import { BacklinksWhereUniqueInput } from "./BacklinksWhereUniqueInput";
import { BacklinksUpdateInput } from "./BacklinksUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BacklinksControllerBase {
  constructor(
    protected readonly service: BacklinksService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Backlinks })
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBacklinks(
    @common.Body() data: BacklinksCreateInput
  ): Promise<Backlinks> {
    return await this.service.createBacklinks({
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
        domains: true,
        id: true,
        score: true,
        total: true,
        updatedAt: true,

        urlAnalysis: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Backlinks] })
  @ApiNestedQuery(BacklinksFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async backlinksItems(@common.Req() request: Request): Promise<Backlinks[]> {
    const args = plainToClass(BacklinksFindManyArgs, request.query);
    return this.service.backlinksItems({
      ...args,
      select: {
        createdAt: true,
        domains: true,
        id: true,
        score: true,
        total: true,
        updatedAt: true,

        urlAnalysis: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Backlinks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async backlinks(
    @common.Param() params: BacklinksWhereUniqueInput
  ): Promise<Backlinks | null> {
    const result = await this.service.backlinks({
      where: params,
      select: {
        createdAt: true,
        domains: true,
        id: true,
        score: true,
        total: true,
        updatedAt: true,

        urlAnalysis: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Backlinks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBacklinks(
    @common.Param() params: BacklinksWhereUniqueInput,
    @common.Body() data: BacklinksUpdateInput
  ): Promise<Backlinks | null> {
    try {
      return await this.service.updateBacklinks({
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
          domains: true,
          id: true,
          score: true,
          total: true,
          updatedAt: true,

          urlAnalysis: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Backlinks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBacklinks(
    @common.Param() params: BacklinksWhereUniqueInput
  ): Promise<Backlinks | null> {
    try {
      return await this.service.deleteBacklinks({
        where: params,
        select: {
          createdAt: true,
          domains: true,
          id: true,
          score: true,
          total: true,
          updatedAt: true,

          urlAnalysis: {
            select: {
              id: true,
            },
          },
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
