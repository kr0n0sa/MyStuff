import { Test, TestingModule } from '@nestjs/testing';
import { AddressService } from './address.service';
import { async } from 'rxjs';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressService],
    }).compile();

    service = module.get<AddressService>(AddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  async getById(id: number): Promise<AddressDto> {
    return await this.addressStoreService.get(id);
}
});



