import { userDTO } from './get-user-info.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(userDTO) {}
