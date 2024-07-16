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
import { DogSitterWhereUniqueInput } from "./DogSitterWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DogSitterUpdateInput } from "./DogSitterUpdateInput";

@ArgsType()
class UpdateDogSitterArgs {
  @ApiProperty({
    required: true,
    type: () => DogSitterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DogSitterWhereUniqueInput)
  @Field(() => DogSitterWhereUniqueInput, { nullable: false })
  where!: DogSitterWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DogSitterUpdateInput,
  })
  @ValidateNested()
  @Type(() => DogSitterUpdateInput)
  @Field(() => DogSitterUpdateInput, { nullable: false })
  data!: DogSitterUpdateInput;
}

export { UpdateDogSitterArgs as UpdateDogSitterArgs };