import { IsDefined, IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

const MAX_INT_VALUE = 2147483647;

export class GetPostDto {
  @IsInt()
  @Max(MAX_INT_VALUE)
  @Min(1)
  @IsNotEmpty()
  @IsDefined()
  @Transform(value => Number(value))
  public postId: number;

}
