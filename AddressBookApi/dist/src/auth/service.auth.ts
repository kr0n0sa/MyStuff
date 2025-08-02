import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUsersDto } from 'src/user/create-user.dto';
import { UserService } from 'src/user/user.service';
import { userDTO } from 'src/address/dto/get-user-info.dto';
import { bcrypt } from '@nestjs/bcrypt';

@Injectable()
export class AuthService {
  // injects an instance of UserService as a parameter so we can use its methods.
  constructor(private readonly userService: UserService) {}
  //This line defines an asynchronous signup method.
  async signup(userDto: CreateUsersDto) {
    // These lines check if a user with the provided
    // email already exists. If an existing user is found,
    // it throws an HTTP exception with the User
    // already exists message.
    const existingUser = await this.userService.getByEmail(userDto.email);
    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.FOUND);
    }
    // This line creates a new user
    // using the userService.createUser method and returns it.
    return await this.userService.createUser(userDTO);
  }

  async login(user: userDTO) {
    // ამ კოდს ამოაქვს user info სერვერიდან და ადარებს მას
    // მიწოდებულ ინფოსთნ. პაროლს ადარებს გაჰეშილ პაროლს
    // და თუ ემთხვევა, ზნაჩიტ ეგაა
    const existingUser = await this.userService.getByEmail(user.email);
    const passwordMatch = await bcrypt.compare(
      user?.password,
      existingUser.password,
    );

    // თუ ან პაროლი ან მომხმარებლის სახელი იყო
    // არასწორი, მაშინ HTTPexception ს გამოუშვებს
    // და არ შეგიშვებს არსად.
    if (!existingUser || !passwordMatch) {
      throw new HttpException('Invalid credential', HttpStatus.UNAUTHORIZED);
    }

    // ეს ხაზები ქმნიან JWT ს გადაცემული ატრიბუტებით.
    // აქ sub არის ის ნაწილი, რომელთანაც token არის
    // დაკავშირებული
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
