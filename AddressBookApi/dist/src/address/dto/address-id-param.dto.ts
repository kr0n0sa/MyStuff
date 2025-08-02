import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class AddressIdParam {
  @Type(() => Number)
  @IsNumber()
  id: number;
}
