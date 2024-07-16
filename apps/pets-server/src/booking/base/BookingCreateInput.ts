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
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { DogWhereUniqueInput } from "../../dog/base/DogWhereUniqueInput";
import { DogSitterWhereUniqueInput } from "../../dogSitter/base/DogSitterWhereUniqueInput";

@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DogWhereUniqueInput)
  @IsOptional()
  @Field(() => DogWhereUniqueInput, {
    nullable: true,
  })
  dog?: DogWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DogSitterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DogSitterWhereUniqueInput)
  @IsOptional()
  @Field(() => DogSitterWhereUniqueInput, {
    nullable: true,
  })
  dogSitter?: DogSitterWhereUniqueInput | null;
}

export { BookingCreateInput as BookingCreateInput };