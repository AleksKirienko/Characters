import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../core/models/character';
import { ApiService } from '../../core/api.service';
import { Gender } from '../../core/models/gender';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  gender: Gender = 'both';
  characters: Observable<Character[]> = this.apiService.loadCharacters();

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSetGender(gender: Gender) {
    this.gender = gender;
  }
}
