import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // Return internal server error status for non HttpException
    // otherwise, return the status of the HttpException
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorHash = uuid();

    // Implement logging of the error
    response.status(status).json({
      statusCode: status,
      // Return "internal server error" as message
      // for non HttpException
      // otherwise, return the message of the HttpException
      message:
        exception instanceof HttpException
          ? exception.message
          : 'internal server error',
      timestamp: new Date().toISOString(),
      errorHash,
    });
  }
}
