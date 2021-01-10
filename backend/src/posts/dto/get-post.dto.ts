import { IsDefined, IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

const MAX_INT_VALUE = 2147483647;

export class GetPostDto {
  @ApiProperty({
    example: 5,
    description: 'post\'s id',
  })
  @IsInt()
  @Max(MAX_INT_VALUE)
  @Min(1)
  @IsNotEmpty()
  @IsDefined()
  @Transform(value => Number(value))
  public postId: number;

}
