import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {

  transform<T>(items: any[], key: string, filterCondition: T): any[] {
    if (!items) {
      return items;
    }

    return items.filter((item) => item[key] === filterCondition);
  }

}
