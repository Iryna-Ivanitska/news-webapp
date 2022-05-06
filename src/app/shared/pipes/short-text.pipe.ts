import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, num: number): unknown {
    return num < value.length ? value.slice(0, num) + '...' 
        : value
  }

}
