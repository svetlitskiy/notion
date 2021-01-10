import { ApiProperty } from '@nestjs/swagger';
import { PostInterface } from '../../share/api/interfaces/post.interface';

export class PostType extends PostInterface {
    @ApiProperty({example: 1, description: 'userId'})
    public userId: number;

    @ApiProperty({example: 5})
    public id: number;

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public body: string
}
