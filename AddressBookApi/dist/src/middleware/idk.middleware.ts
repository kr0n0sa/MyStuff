import { Injectable, NestMiddleware, RequestMethod } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomLogger } from 'src/loggers/custom.logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: CustomLogger) {}

  use(req: Request, res: Response, next: NextFunction) {
    // ვლოგავთ header, body და url ს
    this.logger.log(`req: {
    headers: ${JSON.stringify(req.headers)},
    body: ${JSON.stringify(req.body)},
    originalUrl: ${req.originalUrl},
  }`);
    // სტატუსის კოდს დაკონტექსტის სიგრძეს ლოგავს როცა
    // response მთავრდება
    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');

      this.logger.log(
        `response:${req.url} status code:${res.statusCode} length:${contentLength}`,
      );
    });
    // next გადასცემს ამ ინფოს შემდეგ middleware ს ან route handler ს
    if (next) {
      next();
    }
  }
  if(next) {
    next();
  }
}
