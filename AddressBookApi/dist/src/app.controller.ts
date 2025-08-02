import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { userDTO } from './address/dto/get-user-info.dto';
import { CreateUserDto } from './address/dto/create-user.dto';
import { UpdateUserDto } from './address/dto/update-user.dto';
import { create } from 'domain';
import { CreateAddressDto } from './address/dto/create-address.dto';
import { AddressService } from './app.service';
import { AddressDto } from './address/dto/addressdto.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): userDTO {
    // Example return
    return { name: 'a', ID: 1, Email: 'mail' };
  }

  @Post('user')
  create(@Body() createUserDto: CreateUserDto) {
    // Example response
    return { password: 'password' };
  }

  @Patch('user/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // Simulated update response
    return {
      message: `User with ID ${id} updated.`,
      data: updateUserDto,
    };
  }
  @Post()
  create(@Body() address: CreateAddressDto) {
    return this.AddressService.create(address);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() address: AddressDto,
  ): void {
    return this.AddressService.update(id, address);
  }

  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.AddressService.delete(id);
  }
}
