import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastNameFirst'
})
export class LastNameFirstPipe implements PipeTransform {

  transform(value: any, args: any = ','): any {
    return value.split(' ').reverse().join(args + ' ');
  }

}
