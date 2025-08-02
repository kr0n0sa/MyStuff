import { Module } from '@nestjs/common';
import { CustomLogger } from 'src/loggers/custom.logger';

@Module({
  providers: [CustomLogger],
  exports: [CustomLogger],
})
export class LoggerModule {}
// სადაც გინდა მერე იქ ჩასვამ

// ასე უნდა ჩასვა
// constructor(private readonly addressService: AddressService, private readonly customLogger: CustomLogger) {}

// ასე გამოიყენო
// this.logger.warn('duplicated address');
