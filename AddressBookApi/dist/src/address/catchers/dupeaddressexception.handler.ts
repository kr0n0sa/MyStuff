import { HttpStatus } from '@nestjs/common';
import { BaseAddressException } from './dupeexception.handler';

export class DuplicateAddressException extends BaseAddressException {
  constructor(addressLine: string) {
    super(`The address '${addressLine}' already exists.`, HttpStatus.CONFLICT);
  }
}
