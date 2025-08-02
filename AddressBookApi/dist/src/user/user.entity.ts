import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  ManyToMany,
  OneToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { ContactEntity } from './contact.entity';
import { AddressEntity } from 'src/address/entities/address.entity';
import { RoleEntity } from './Role.Entity';

import { Exclude, Expose } from 'class-transformer';
import { RoleConstant } from 'src/const/role.constant';

export const GROUP_DETAILS = 'group_details';
export const GROUP_LIST = 'group_list';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  @Expose({
    groups: [RoleConstant.Admin, RoleConstant.Editor, RoleConstant.Reader],
  })
  id: number;

  @Column()
  @Expose({
    groups: [RoleConstant.Admin, RoleConstant.Editor, RoleConstant.Reader],
  })
  user_name: string;

  // @OneToOne(() => AddressEntity, (address) => address.user /*{ eager: true }*/)
  // @JoinColumn()
  address: AddressEntity;

  // @OneToMany(() => ContactEntity, (contact) => contact.user, {
  //   cascade: ['insert', 'update'],
  // })
  // contacts: ContactEntity[];

  @ManyToMany(() => RoleEntity, (role) => role.users, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  roles: RoleEntity[];

  @Column()
  @Exclude()
  @Expose({ groups: [RoleConstant.Admin] })
  password: string;
}
