import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { AddressBookModule } from './address-book/address-book.module';
import { AddressEntity } from './address/entities/address.entity';
import { LoggerModule } from './address/logger.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AddressModule,
    AddressBookModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'appuser',
      password: 'password',
      database: 'AddressBook',
      entities: [AddressEntity],
      synchronize: true,
    }),
    LoggerModule,
    TypeOrmModule.forFeature([AddressEntity]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
