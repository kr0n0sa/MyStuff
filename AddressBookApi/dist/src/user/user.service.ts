import { CreateUsersDto } from 'src/address/dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { ContactEntity } from './contact.entity';
import { ManyToMany } from 'typeorm';
import { RoleEntity } from './Role.Entity';
@Injectable()
export class UserService {
  addressRepository: any;
  userRepository: any;
  create(createUsersDto: CreateUsersDto) {
    throw new Error('Method not implemented.');
  }
  // for OneTOOne
  // async createUser(user: CreateUsersDto) {
  //   const userEntity = new UserEntity();
  //   userEntity.user_name = user.name;
  //   if (user.addressID) {
  //     const address = await this.addressRepository.findOne({
  //       where: { id: user.addressId },
  //     });
  //     userEntity.address = address;
  //   }
  //   return await this.userRepository.save(userEntity);
  // }
  // for OneToMany
  // async createUser(user: CreateUsersDto) {
  //   const userEntity = new UserEntity();
  //   // These lines create a new instance of UserEntity,
  //   // iterates through the user.contacts array.
  //   // For each contact associated with the user,
  //   // it populates the corresponding ContactEntity
  //   // object and adds it to the userEntity.contacts array.
  //   if (user.contacts?.length > 0) {
  //     userEntity.contacts = [];
  //     user.contacts.forEach((contact) => {
  //       const contactEntity = new ContactEntity();
  //       contactEntity.type = contact.type;
  //       contactEntity.value = contact.value;
  //       userEntity.contacts.push(contactEntity);
  //     });
  //   }
  // }
  // // ერთდ რომ ჩაიტვირთოს eager ის გამოყენების გარეშე
  // async getByUserId(id: number) {
  //   return await this.userRepository.findOne({
  //     where: { id },
  //     relations: ['contacts'],
  //   });
  // }

  // for ManyToMany
  async createUser(user: CreateUsersDto) {
    const userEntity = new UserEntity();
    userEntity.user_name = user.name;
    if (user.roles?.length > 0) {
      userEntity.roles = [];
      await Promise.all(
        // If user has roles, it uses Promise.all() with map to
        // asynchronously loop through each role in the user.roles
        // array. For each role, we call the addOrGetRole
        // method to retrieve or create RoleEntity.
        user.roles.map(async (role) => {
          const roleEntity = await this.addOrGetRole(role.name);
          userEntity.roles.push(roleEntity);
        }),
      );
    }
    return await this.userRepository.save(userEntity);
  }
  // This method tries to find role with a given name in the database using
  // this.roleRepository.findOne(). If role doesn’t exist, it creates a new
  // RoleEntity instance and sets its name to the provided roleName.
  private async addOrGetRole(roleName: string) {
    const roleEntity = await this.roleRepository.findOne({
      where: { name: roleName },
    });
    if (!roleEntity) {
      const newRole = new RoleEntity();
      newRole.name = roleName;
      return newRole;
    }
    return roleEntity;
  }

  //  use the relations property to specify that
  // it should also load the user’s roles.
  async getByUserId(id: number) {
    return await this.userRepository.findOne({
      where: { id },
      relations: ['roles'],
    });
  }
}
