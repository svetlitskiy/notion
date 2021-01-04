import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetPostDto {
  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  public postId: number;

}
