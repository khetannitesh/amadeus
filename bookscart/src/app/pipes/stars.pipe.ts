import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: any, args: any = '*'): any {
    if (isNaN(value)) {
      return null;
    }

    let starStr = '';
    for (let i = 0; i < value; i++) {
      starStr += args;
    }
    return starStr;
  }

}
