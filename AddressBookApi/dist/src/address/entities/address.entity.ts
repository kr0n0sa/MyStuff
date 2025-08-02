import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

import { UserEntity } from 'src/user/user.entity';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'NA' })
  address_line: string;

  @Column()
  postCode: string;

  @Column()
  state: string;

  @Column()
  createdDate: Date;

  @UpdateDateColumn()
  updated_date: Date;

  @OneToOne(() => UserEntity, (user) => user.address)
  user: UserEntity;
}

// @PrimaryGeneratedColumn: This is a decorator used to
// mark the id property as the entity’s primary key.
// It indicates that this property will be automatically
// generated and serve as a unique identifier for
// each record in the table.

// @Column: This is a decorator used to mark the properties
// like addressLine, postCode, state, and createdDate as
// columns in the database table. Each of these properties
// represents a specific piece of data that will be stored in the table.
