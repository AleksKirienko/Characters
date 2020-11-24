import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/api.service';
import { Quote } from '../../core/models/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // quotes: Observable<Quote[]> = this.apiService.loadQuotes();

  constructor(private apiService: ApiService) {
  }

  // constructor(private route: ActivatedRoute) {
  //   this.route.queryParams.subscribe(params => console.log(params));
  // }

  ngOnInit(): void {
  }

}
