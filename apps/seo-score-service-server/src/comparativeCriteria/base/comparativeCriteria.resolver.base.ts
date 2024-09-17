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
import { ComparativeCriteria } from "./ComparativeCriteria";
import { ComparativeCriteriaCountArgs } from "./ComparativeCriteriaCountArgs";
import { ComparativeCriteriaFindManyArgs } from "./ComparativeCriteriaFindManyArgs";
import { ComparativeCriteriaFindUniqueArgs } from "./ComparativeCriteriaFindUniqueArgs";
import { CreateComparativeCriteriaArgs } from "./CreateComparativeCriteriaArgs";
import { UpdateComparativeCriteriaArgs } from "./UpdateComparativeCriteriaArgs";
import { DeleteComparativeCriteriaArgs } from "./DeleteComparativeCriteriaArgs";
import { UrlAnalysis } from "../../urlAnalysis/base/UrlAnalysis";
import { ComparativeCriteriaService } from "../comparativeCriteria.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComparativeCriteria)
export class ComparativeCriteriaResolverBase {
  constructor(
    protected readonly service: ComparativeCriteriaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "read",
    possession: "any",
  })
  async _comparativeCriteriaItemsMeta(
    @graphql.Args() args: ComparativeCriteriaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ComparativeCriteria])
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "read",
    possession: "any",
  })
  async comparativeCriteriaItems(
    @graphql.Args() args: ComparativeCriteriaFindManyArgs
  ): Promise<ComparativeCriteria[]> {
    return this.service.comparativeCriteriaItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ComparativeCriteria, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "read",
    possession: "own",
  })
  async comparativeCriteria(
    @graphql.Args() args: ComparativeCriteriaFindUniqueArgs
  ): Promise<ComparativeCriteria | null> {
    const result = await this.service.comparativeCriteria(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ComparativeCriteria)
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "create",
    possession: "any",
  })
  async createComparativeCriteria(
    @graphql.Args() args: CreateComparativeCriteriaArgs
  ): Promise<ComparativeCriteria> {
    return await this.service.createComparativeCriteria({
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
  @graphql.Mutation(() => ComparativeCriteria)
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "update",
    possession: "any",
  })
  async updateComparativeCriteria(
    @graphql.Args() args: UpdateComparativeCriteriaArgs
  ): Promise<ComparativeCriteria | null> {
    try {
      return await this.service.updateComparativeCriteria({
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

  @graphql.Mutation(() => ComparativeCriteria)
  @nestAccessControl.UseRoles({
    resource: "ComparativeCriteria",
    action: "delete",
    possession: "any",
  })
  async deleteComparativeCriteria(
    @graphql.Args() args: DeleteComparativeCriteriaArgs
  ): Promise<ComparativeCriteria | null> {
    try {
      return await this.service.deleteComparativeCriteria(args);
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
    @graphql.Parent() parent: ComparativeCriteria
  ): Promise<UrlAnalysis | null> {
    const result = await this.service.getUrlAnalysis(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
