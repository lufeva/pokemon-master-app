import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get('/health-check')
  @ApiOperation({ summary: 'Health Check for API' })
  @ApiResponse({ status: 200, description: 'Health Check' })
  health(): Record<string, string> {
    return { status: 'ok' };
  }
}
