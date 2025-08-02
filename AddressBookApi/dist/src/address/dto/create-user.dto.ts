import { userDTO } from './get-user-info.dto';

export class CreateUsersDto extends userDTO {
  password: string;
  addressId: any;
}
