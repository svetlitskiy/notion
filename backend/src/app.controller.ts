import { Controller, Get } from '@nestjs/common';
import { AppVersionType } from './app-version.type';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {

  @Get('version')
  @ApiResponse({ status: 200, description: 'App version.', type: AppVersionType})
  version(): AppVersionType {
    return { version: process.env.npm_package_version };
  }

}
