import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../core/models/character';
import { ApiService } from '../../core/api.service';
import { Status } from '../../core/models/status';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  status: Status = 'both';
  characters: Observable<Character[]> = this.apiService.loadCharacters();

  constructor(private apiService: ApiService) {
  }

  // tslint:disable-next-line:typedef
  onSetStatus(status: Status) {
    this.status = status;
  }
}
