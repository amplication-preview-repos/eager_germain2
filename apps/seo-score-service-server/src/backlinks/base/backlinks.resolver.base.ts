/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Backlinks } from "./Backlinks";
import { BacklinksCountArgs } from "./BacklinksCountArgs";
import { BacklinksFindManyArgs } from "./BacklinksFindManyArgs";
import { BacklinksFindUniqueArgs } from "./BacklinksFindUniqueArgs";
import { CreateBacklinksArgs } from "./CreateBacklinksArgs";
import { UpdateBacklinksArgs } from "./UpdateBacklinksArgs";
import { DeleteBacklinksArgs } from "./DeleteBacklinksArgs";
import { UrlAnalysis } from "../../urlAnalysis/base/UrlAnalysis";
import { BacklinksService } from "../backlinks.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Backlinks)
export class BacklinksResolverBase {
  constructor(
    protected readonly service: BacklinksService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "read",
    possession: "any",
  })
  async _backlinksItemsMeta(
    @graphql.Args() args: BacklinksCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Backlinks])
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "read",
    possession: "any",
  })
  async backlinksItems(
    @graphql.Args() args: BacklinksFindManyArgs
  ): Promise<Backlinks[]> {
    return this.service.backlinksItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Backlinks, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "read",
    possession: "own",
  })
  async backlinks(
    @graphql.Args() args: BacklinksFindUniqueArgs
  ): Promise<Backlinks | null> {
    const result = await this.service.backlinks(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Backlinks)
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "create",
    possession: "any",
  })
  async createBacklinks(
    @graphql.Args() args: CreateBacklinksArgs
  ): Promise<Backlinks> {
    return await this.service.createBacklinks({
      ...args,
      data: {
        ...args.data,

        urlAnalysis: args.data.urlAnalysis
          ? {
              connect: args.data.urlAnalysis,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Backlinks)
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "update",
    possession: "any",
  })
  async updateBacklinks(
    @graphql.Args() args: UpdateBacklinksArgs
  ): Promise<Backlinks | null> {
    try {
      return await this.service.updateBacklinks({
        ...args,
        data: {
          ...args.data,

          urlAnalysis: args.data.urlAnalysis
            ? {
                connect: args.data.urlAnalysis,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Backlinks)
  @nestAccessControl.UseRoles({
    resource: "Backlinks",
    action: "delete",
    possession: "any",
  })
  async deleteBacklinks(
    @graphql.Args() args: DeleteBacklinksArgs
  ): Promise<Backlinks | null> {
    try {
      return await this.service.deleteBacklinks(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UrlAnalysis, {
    nullable: true,
    name: "urlAnalysis",
  })
  @nestAccessControl.UseRoles({
    resource: "UrlAnalysis",
    action: "read",
    possession: "any",
  })
  async getUrlAnalysis(
    @graphql.Parent() parent: Backlinks
  ): Promise<UrlAnalysis | null> {
    const result = await this.service.getUrlAnalysis(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
