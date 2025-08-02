import { Controller, Injectable, Get, Param } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { SerializeOptions } from '@nestjs/common';
import { RoleConstant } from 'src/const/role.constant';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id/object')
  async getByIdAsObject(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getById(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return { ...user };
  }

  @Get('admin/:id')
  @SerializeOptions({
    groups: [RoleConstant.Admin],
  })
  async getByAdmin(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getById(id);
  }

  @Get('editor/:id')
  @SerializeOptions({
    groups: [RoleConstant.Editor],
  })
  async getByEditor(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getById(id);
  }

  @Get('reader/:id')
  @SerializeOptions({
    groups: [RoleConstant.Reader],
  })
  async getByReader(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getById(id);
  }
}
