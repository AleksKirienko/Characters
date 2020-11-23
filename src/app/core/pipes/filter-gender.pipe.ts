import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character';
import { Gender } from '../models/gender';

@Pipe({
  name: 'filterGender'
})
export class FilterGenderPipe implements PipeTransform {

  transform(list: Character[], gender: Gender): Character[] {
    if (!list) {
      return null;
    }
    if (!gender || gender === 'both') {
      return list;
    }
    return list.filter((item: Character): boolean => item.gender.toLocaleLowerCase() === gender);
  }

}
