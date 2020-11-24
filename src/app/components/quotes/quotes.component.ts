import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Quote } from '../../core/models/quote';
import { QuoteService } from '../../core/services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  private author;
  quotes: Observable<Quote[]>;

  constructor(private quoteService: QuoteService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.author = params.author.replace(' ', '+');
      console.log('author = ', this.author);
      this.quotes = this.quoteService.loadQuotes(this.author);
    });
  }

  ngOnInit(): void {
  }

}
