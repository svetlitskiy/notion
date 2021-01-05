import { ApiProperty } from '@nestjs/swagger';

export class AppVersionType {
    @ApiProperty({ example: 'v1.2.3', description: 'version of notion\'s backend' })
    public version: string;
}
