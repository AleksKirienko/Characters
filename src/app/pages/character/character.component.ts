import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../core/models/character';
import { Status } from '../../core/models/status';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  status: Status = 'both';
  characters: Observable<Character[]> = this.apiService.loadCharacters();

  // tslint:disable-next-line:variable-name
  constructor(private apiService: ApiService, private _router: Router) {
  }

  onSetStatus(status: Status): void {
    this.status = status;
  }

  getQuote(author): void {
    this._router.navigate(['quote', author.replace(' ', '+')]);
    // this._router.navigateByUrl('quote/' + author);
  }
}
