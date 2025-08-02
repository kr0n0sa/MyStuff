import { OmitType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddressDto {
  @IsNumber()
  id: number;
  @IsNotEmpty()
  addressLine: string;
  @IsNumber()
  postCode: number;
  @IsString()
  state: string;
  @IsDate()
  createdDate: Date;
}

export class CreateAddressDto extends OmitType(AddressDto, [
  'id',
  'createdDate',
]) {}
