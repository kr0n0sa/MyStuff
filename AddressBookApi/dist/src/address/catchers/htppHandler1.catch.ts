import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

// @catch ის არგუკმენტი მიუთითებს, რომ ის გააკეთებს მითითებული არგუმენტის შეცდომების მოგვარებას
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // ქმნის catch მეთოდს 2 არგუმენტით. host არის request-response object და კონტექსტი შეცდომის
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    //უკეთბს შეცდომას უნიკალურ ჰეშს
    const errorHash = uuid();

    // TODO: Implement logging of the error
    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
      errorHash,
    });
  }
}
