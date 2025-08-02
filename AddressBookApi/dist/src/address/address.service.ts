import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  create(createAddressDto: CreateAddressDto) {
    throw new Error('Method not implemented.');
  }
  async getById(id: number) {
    return await this.addressRepository.findOne({
      where: { id },
      state: 'QLD',
    });
  }
  async getById1(id: number) {
  return await this.addressRepository
    .createQueryBuilder('address')
    .where('address.id=:id', {id})
    .getOne();
  }
  // ძველი უ DB ო
  // getById(id: number): Address {
  //   throw new Error('Method not implemented.');
  // }
  // create(createAddressDto: CreateAddressDto) {
  //   return 'This action adds a new address';
  // }

  async performTransaction(): Promise<void> {
    let queryRunner = null;
    try {
      queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      const entityManager = queryRunner.manager;
      await entityManager.transaction(async (transactionalEntityManager) => {
        // Perform multiple operations within the transaction
        await transactionalEntityManager.save(AddressEntity, {
          address_line: '123 Main St',
          post_code: '4115',
          state: 'QLD',
        });
        await transactionalEntityManager.delete(AddressEntity, { id: 1 });
      });
      await queryRunner.commitTransaction();
    } catch (ex) {
      if (queryRunner) await queryRunner.rollbackTransaction();
    } finally {
      if (queryRunner) await queryRunner.release();
    }
  }
  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  async update(id: number, address: UpdateAddressDto) {
    const existingEntity = await this.getById(id);
    //ამოწმებს არის თუ არა მოცემული მისამართი საერთოდ
    if (!existingEntity) {
      throw new HttpException('Incorrect address id', HttpStatus.BAD_REQUEST);
    }

    // აახლებს არსებულ მისამართს DTO დან მიწოდებულ ინფოზე
    existingEntity.address_line = address.addressLine;
    existingEntity.post_code = address.postCode.toString();
    existingEntity.state = address.state;
    // commit
    return this.addressRepository.save(existingEntity);
  }
  // ძველი
  // update(id: number, updateAddressDto: UpdateAddressDto) {
  //   return `This action updates a #${id} address`;
  // }

  remove(id: number) {
  remove(id: number) {
    return `This action removes a #${id} address`;
  }

  async delete(id: number) {
    return await this.addressRepository.delete(id);
  }
  // address.service.ts
// use Repository API



}
}
// async create(address: CreateAddressDto) {
// ამოწმებს არის თუ არა მისამართი უკვე დამატებული DB ში
// const existingAddress = await this.addressRepository.findOne({
//     where: { address_line: address.addressLine },
//   });
//   if (existingAddress) {
//     throw new DuplicateAddressException(address.addressLine);
//   }

//   ეს ქმნის AddressEntity ს და DTO დან აძლევს მნიშვნელობებს
//   const entity = new AddressEntity();
//   entity.address_line = address.addressLine;
//   entity.state = address.state;
//   entity.post_code = address.postCode.toString();

//  იგივე რაც commit
//  return await this.addressRepository.save(entity);
// }
