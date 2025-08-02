import { Module } from '@nestjs/common';
import { UserModule } from 'module.user';
import { AuthController } from './controller.auth';
import { AuthService } from './service.auth';
import { JwtModule } from "@nestjs/Jwt"
import { LocalStrategy } from './local-strat.auth';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService],
  // Jwt მოდულის რეგისტრაციისთვის შემდეგი პარამეტრებით,
  // იყენებ .register მეთოდს. უთითებ პარამეტრებს.
  // secret --- რა secret key უნდა გამოიყენო jwt ს
  // sign და verfication ისთვის. მას configService 
  // აძრობს environment ის  configuration file იდან.
  // SignOpitons ამ შემთვევაში უთითებს, ეს ტოკენი რამდენი
  // ხნით იყოს ვალიდური.

  JwtModule.register({
      secret: configService.get('JWT_SECRET_KEY'),
      signOptions: { expiresIn: '600s' },

      // Secret Key არ უნდა ჩანდეს კოდში
    }),
    providers: [AuthService, LocalStrategy],
    exports: [JwtAuthGuard, AuthService],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard],
  })  
export class AuthModule {}

