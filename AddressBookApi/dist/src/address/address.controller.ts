import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressIdParam } from './dto/address-id-param.dto';
import { JwtAuthGuard } from 'src/jwtGuard.auth';
import { Roles } from 'src/auth/roleDecor.auth';
import { Role } from 'src/roleEnum.auth';
import { RoleGuard } from 'src/auth/roleGuard.auth';
import { AddressDto } from './dto/addressdto.dto';
// @UseGuards(JwtAuthGuard)
// @Controller('address')
// export class AddressController {
//   constructor(private readonly addressService: AddressService) {}

//   @Post()
//   create(@Body() createAddressDto: CreateAddressDto) {
//     return this.addressService.create(createAddressDto);
//   }

//   @Get()
//   findAll() {
//     return this.addressService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.addressService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
//     return this.addressService.update(+id, updateAddressDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.addressService.remove(+id);
//   }

//   @Get(':id')
//   getById(@Param('id', ParseIntPipe) id: number): Address {
//     return this.addressService.getById(id);
//   }
//   @Get(':id')
//   async getById1(@Param('id', ParseIntPipe) id: number) {
//     return this.addressService.getById(id);
//   }

//   @Put(':id')
//   async DBupdate(
//     @Param() idParam: AddressIdParam,
//     @Body() address: UpdateAddressDto,
//   ) {
//     return await this.addressService.update(idParam.id, address);
//   }

//   @Get()
//   search(@Query() idParam: AddressIdParam) {
//     return this.addressService.getById(idParam.id);
//   }

//   @Delete(':id')
//   async deleteById(@Param() idParam: AddressIdParam) {
//     return await this.addressService.delete(idParam.id);
//   }
// }

// function Query(): (
//   target: AddressController,
//   propertyKey: 'search',
//   parameterIndex: 0,
// ) => void {
//   throw new Error('Function not implemented.');
// }

@UseGuards(JwtAuthGuard)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  // his applies the @Roles decorator with the Reader,
  // Writer, and Admin roles to the /:id endpoint.
  // It indicates that users with the roles of Reader,
  // Writer, or Admin can access the getById route.
  @Roles(Role.Reader, Role.Writer, Role.Admin)
  @UseGuards(RoleGuard)
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.addressService.getById(id);
  }

  // This applies the @Roles decorator with the
  // Writer and Admin roles to the POST endpoint.
  // It indicates that users with the roles of Writer
  // or Admin can access the create route.
  @Roles(Role.Writer, Role.Admin)
  @UseGuards(RoleGuard)
  @Post()
  create(@Body() address: CreateAddressDto) {
    return this.addressService.create(address);
  }
  // his applies the @Roles decorator with the Writer
  // and Admin roles to the PUT endpoint.
  // It indicates that users with the roles of
  // Writer or Admin can access the update route.
  @Roles(Role.Writer, Role.Admin)
  @UseGuards(RoleGuard)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() address: AddressDto) {
    return this.addressService.update(id, address);
  }

  // This applies the @Roles decorator with the Admin
  // role to the DELETE endpoint. It indicates that
  // users with the Admin role can access the deleteById route.
  @Roles(Role.Admin)
  @UseGuards(RoleGuard)
  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.addressService.delete(id);
  }
}
