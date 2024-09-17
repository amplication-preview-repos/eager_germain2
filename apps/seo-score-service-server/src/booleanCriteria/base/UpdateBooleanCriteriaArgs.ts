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
import { BooleanCriteriaWhereUniqueInput } from "./BooleanCriteriaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BooleanCriteriaUpdateInput } from "./BooleanCriteriaUpdateInput";

@ArgsType()
class UpdateBooleanCriteriaArgs {
  @ApiProperty({
    required: true,
    type: () => BooleanCriteriaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BooleanCriteriaWhereUniqueInput)
  @Field(() => BooleanCriteriaWhereUniqueInput, { nullable: false })
  where!: BooleanCriteriaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BooleanCriteriaUpdateInput,
  })
  @ValidateNested()
  @Type(() => BooleanCriteriaUpdateInput)
  @Field(() => BooleanCriteriaUpdateInput, { nullable: false })
  data!: BooleanCriteriaUpdateInput;
}

export { UpdateBooleanCriteriaArgs as UpdateBooleanCriteriaArgs };
