import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
@InputType()
class UserWhereUniqueInputs {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  @Field(() => String)
  username?: string;
}
export { UserWhereUniqueInputs };
