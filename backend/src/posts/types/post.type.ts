import { ApiProperty } from '@nestjs/swagger';

export class PostType {
    @ApiProperty({example: 1, description: 'userId'})
    public userId: number;

    @ApiProperty({example: 5})
    public id: number;

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public body: string
}
