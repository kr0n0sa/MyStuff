import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
// This defines the AuthGuard class, which implements the CanActivate interface.
export class AuthGuard implements CanActivate {
  // ეს არკვევს, არის თუ არა წვდომა ნებადართული.
  // გამოიძახება მაშინ, როცა დაცულ route თან უნდა ვინმეს შეხება.
  canActivate(context: ExecutionContext): boolean {
    // HTTP request obj ს ამოიღებს კონტექსტიდან switchToHttp()
    // მეთოდის დახმარებით და request ს ანიჭებს მის მნიშვნელობას
    const request = context.switchToHttp().getRequest();
    // თუ შესაბამისი authptozation value აქვს, აძლევს უფლებას რომ
    // დაუკავშირდეს ამ route ს. ამ შემთხვევაში, hard-coded token
    // გამოიყენება აუტორიზაციისთვის. irl, JWT ში გაწერილ ტოკენს
    // გამოიყენებდი
    return request.headers?.authorization === 'token';
  }
}
