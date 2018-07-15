import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagefilter'
})
export class ImagefilterPipe implements PipeTransform {

  transform(value: any, category: any): any {
    if (!value || !category || category == 'all') {
      return value;
    }
    return value.filter(item => {
      return item.category == category.toLowerCase();
    });
  }

}
