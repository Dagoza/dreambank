import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, quantityString?: number, quantityStar?: number): any {
    if (value === undefined) {
      return value;
    }

    // Replace value with asterisks
    return value.substring(0,quantityString) + '*'.repeat(quantityStar);
  }

}

