import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../../core/models/character';
import { Status } from '../../core/models/status';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(list: Character[], status: Status): Character[] {
    if (!list) {
      return null;
    }
    if (!status || status === 'both') {
      return list;
    }
    return list.filter((item: Character): boolean => item.status.toLocaleLowerCase() === status);
  }

}
