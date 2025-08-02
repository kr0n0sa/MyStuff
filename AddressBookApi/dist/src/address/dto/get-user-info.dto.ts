import { IsArray } from 'class-validator';
import { ContactDto } from 'src/user/contact.dto';
export class userDTO {
  name: string;
  ID: number;
  Email: string;
  addressID: number;
  @IsArray()
  contacts: ContactDto[];
}
