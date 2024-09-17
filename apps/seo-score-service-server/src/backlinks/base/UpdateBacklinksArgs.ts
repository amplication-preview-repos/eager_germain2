/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BacklinksWhereUniqueInput } from "./BacklinksWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BacklinksUpdateInput } from "./BacklinksUpdateInput";

@ArgsType()
class UpdateBacklinksArgs {
  @ApiProperty({
    required: true,
    type: () => BacklinksWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BacklinksWhereUniqueInput)
  @Field(() => BacklinksWhereUniqueInput, { nullable: false })
  where!: BacklinksWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BacklinksUpdateInput,
  })
  @ValidateNested()
  @Type(() => BacklinksUpdateInput)
  @Field(() => BacklinksUpdateInput, { nullable: false })
  data!: BacklinksUpdateInput;
}

export { UpdateBacklinksArgs as UpdateBacklinksArgs };
