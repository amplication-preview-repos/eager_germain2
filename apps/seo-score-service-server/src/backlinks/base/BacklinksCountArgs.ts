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
import { BacklinksWhereInput } from "./BacklinksWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BacklinksCountArgs {
  @ApiProperty({
    required: false,
    type: () => BacklinksWhereInput,
  })
  @Field(() => BacklinksWhereInput, { nullable: true })
  @Type(() => BacklinksWhereInput)
  where?: BacklinksWhereInput;
}

export { BacklinksCountArgs as BacklinksCountArgs };