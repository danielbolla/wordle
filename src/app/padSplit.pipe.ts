import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padSplit'
})
export class PadSlpit implements PipeTransform {

  transform(value: string, length: number): string[] {
    return value.padEnd(length, ' ').split('');
  }

}
