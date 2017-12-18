import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(array: Book[], field: string): Book[] {
    if (array) {
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
}
