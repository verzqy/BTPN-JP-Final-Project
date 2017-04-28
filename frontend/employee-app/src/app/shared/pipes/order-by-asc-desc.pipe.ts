import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByAscDesc'
})
export class OrderByAscDesc implements PipeTransform {

  transform(array: Array<string>, orderType: boolean, args: string): Array<string> {

    if (!array || array === undefined || array.length === 0) return null;

    if (orderType) {
      array.sort((a: any, b: any) => {
        return a.lastName.localeCompare(b.lastName);
      });
      return array;
    } else {
      array.sort((a: any, b: any) => {
        return b.lastName.localeCompare(a.lastName);
      });
      return array;
    }

  }

}