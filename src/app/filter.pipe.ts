import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(categories: any[], searchText: string): any[] {
    if (!categories || !searchText) {
      return categories; 
    }

    return categories.filter(elt =>
      elt.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
