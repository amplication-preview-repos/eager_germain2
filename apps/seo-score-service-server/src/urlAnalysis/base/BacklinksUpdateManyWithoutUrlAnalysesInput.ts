/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BacklinksWhereUniqueInput } from "../../backlinks/base/BacklinksWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BacklinksUpdateManyWithoutUrlAnalysesInput {
  @Field(() => [BacklinksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BacklinksWhereUniqueInput],
  })
  connect?: Array<BacklinksWhereUniqueInput>;

  @Field(() => [BacklinksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BacklinksWhereUniqueInput],
  })
  disconnect?: Array<BacklinksWhereUniqueInput>;

  @Field(() => [BacklinksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BacklinksWhereUniqueInput],
  })
  set?: Array<BacklinksWhereUniqueInput>;
}

export { BacklinksUpdateManyWithoutUrlAnalysesInput as BacklinksUpdateManyWithoutUrlAnalysesInput };
