import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('version')
  version(): string {
    return process.env.npm_package_version;
  }
}
