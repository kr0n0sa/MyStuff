import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/user/user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  // აღწერს ვალიდაციის მეთოდს, რომელსაც passport გამოიყენებს
  // სხვადასხვა ვალიდაციის მეთოდებისთვის. ამ შემთვევაში local strategy
  // იყენებს validate მეთოდს შესაბამისი signature ით(username, password)
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser({
      email: username,
      password: password,
    } as UserDto);
    // თუ უფელება არ აღმოაჩნდა ან არასწორად შევიდა, ამას იზამს
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
