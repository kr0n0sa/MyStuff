import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from './auth/Guard.auth';

// შევქმნათ custom auth guard რომელიც jwt სტრატეგიას გამოიყენებს
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // override the canActivate method from the AuthGuard
  // parent class. It invokes the canActivate method of
  // the parent class. The default behavior of canActivate
  // in AuthGuard('jwt') is to validate JWT in the
  // request headers. If a valid JWT is found, it
  // allows the request to proceed; otherwise, it
  // denies access by throwing UnauthorizedException.
  // By overriding the canActivate method, we provide an
  // opportunity to customize the behavior if required.
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
  // override the handleRequest(err, user, info) method
  // from the AuthGuard parent class. This method is called
  // once the authentication process is completed.
  // If there’s an error or no user is authenticated,
  // it throws UnauthorizedException. If the authentication
  // is successful, it returns the authenticated user.
  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
