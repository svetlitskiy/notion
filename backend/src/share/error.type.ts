import { ApiProperty } from '@nestjs/swagger';
import { ErrorInterface } from './api/interfaces/error.interface';

export class ErrorType extends ErrorInterface {
    @ApiProperty({ description: 'Error code' })
    public statusCode: number;

    @ApiProperty({example: 5})
    public error: string;

    @ApiProperty({description: 'array of errors', required: false})
    public message?: string[];
}
