import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class MyCustomPipe implements PipeTransform {
  transform(value: any, metadata?: any): any {
    // Apply transformation logic to the 'value' parameter
    // Return the transformed value
    // return transformedValue;
  }
}
