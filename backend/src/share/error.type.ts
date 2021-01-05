import { ApiProperty } from '@nestjs/swagger';

export class ErrorType {
    @ApiProperty({ description: 'Error code' })
    public statusCode: number;

    @ApiProperty({example: 5})
    public error: string;

    @ApiProperty({description: 'array of errors', required: false})
    public message?: string[];
}
