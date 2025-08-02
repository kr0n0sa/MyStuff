import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    // configures the JWT strategy by providing the secret
    // key and specifying how to extract the token from the request header.
    super({
      secretOrKey: configService.get('JWT_SECRET_KEY'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  // validation method for JWT. if user is not found, get fucked bozo.
  async validate(payload: JwtPayload): Promise<UserEntity> {
    const { username } = payload;
    const user = await this.userService.getByEmail(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
