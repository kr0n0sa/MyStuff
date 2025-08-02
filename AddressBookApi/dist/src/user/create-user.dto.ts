import { OmitType } from '@nestjs/mapped-types';
import { userDTO } from 'src/address/dto/get-user-info.dto';
export class CreateUsersDto extends OmitType(userDTO, ['ID']) {}
