// import { HttpException, HttpStatus } from '@nestjs/common';

// export class DuplicateAddressException extends HttpException {
//   constructor(addressLine: string) {
//     super(`The address '${addressLine}' already exists.`, HttpStatus.CONFLICT);
//   }
// }

// ეს მეორე, უფრო უკეთსი ტიპის შეცდომა თვისი errorhash da ტიმესტამპ ით
import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

export class BaseAddressException extends HttpException {
  public readonly errorHash: string;
  public readonly timestamp: string;

  constructor(message: string, status: HttpStatus) {
    super(message, status);
    this.errorHash = uuid();
    this.timestamp = new Date().toISOString();
  }
}

// გამოიყენება  dupeaddressexception.handler.ts ში
