/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
@InputType()
class ShipmentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;
}
export { ShipmentUpdateInput };
