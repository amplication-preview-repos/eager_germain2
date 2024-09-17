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
import { ComparativeCriteriaWhereInput } from "./ComparativeCriteriaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ComparativeCriteriaOrderByInput } from "./ComparativeCriteriaOrderByInput";

@ArgsType()
class ComparativeCriteriaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ComparativeCriteriaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ComparativeCriteriaWhereInput, { nullable: true })
  @Type(() => ComparativeCriteriaWhereInput)
  where?: ComparativeCriteriaWhereInput;

  @ApiProperty({
    required: false,
    type: [ComparativeCriteriaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ComparativeCriteriaOrderByInput], { nullable: true })
  @Type(() => ComparativeCriteriaOrderByInput)
  orderBy?: Array<ComparativeCriteriaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ComparativeCriteriaFindManyArgs as ComparativeCriteriaFindManyArgs };
