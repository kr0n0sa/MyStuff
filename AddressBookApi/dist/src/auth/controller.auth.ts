import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsersDto } from 'src/user/create-user.dto';
import { userDTO } from 'src/address/dto/get-user-info.dto';
import { LocalAuthGuard } from './localGuard.auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.OK)
  //   These lines define the signup method. It calls
  // the signup method from the injected authService
  // instance, passes the user data, and returns a
  // JSON response containing the data of the newly created user.
  public async signup(@Body() user: CreateUsersDto, @Res() res) {
    const newUser = await this.authService.signup(user);
    return res.json(newUser);
  }

  //
  @Post('login')
  async login(@Body() user: userDTO) {
    return this.authService.login(user);
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() user: userDTO) {
    return req.user;
  }
}
