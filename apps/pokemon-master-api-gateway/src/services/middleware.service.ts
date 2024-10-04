
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class MiddlewareRestService implements NestMiddleware {
  private readonly logger = new Logger(MiddlewareRestService.name);
  constructor() {}

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl } = request;

    response.on('close', () => {
      const { statusCode, statusMessage } = response;

      this.logger.log(
        `${method} ${originalUrl} - ${statusCode} - ${statusMessage}`
      );
    });

    next();
  }
}
