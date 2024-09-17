/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { UrlAnalysisWhereUniqueInput } from "../../urlAnalysis/base/UrlAnalysisWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ComparativeCriteriaUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  criterionName?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rank?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  score?: number | null;

  @ApiProperty({
    required: false,
    type: () => UrlAnalysisWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UrlAnalysisWhereUniqueInput)
  @IsOptional()
  @Field(() => UrlAnalysisWhereUniqueInput, {
    nullable: true,
  })
  urlAnalysis?: UrlAnalysisWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  value?: number | null;
}

export { ComparativeCriteriaUpdateInput as ComparativeCriteriaUpdateInput };
