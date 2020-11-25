import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Quote } from '../../core/models/quote';
import { QuoteService } from '../../core/services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit, OnDestroy {

  private author;
  quotes: Observable<Quote[]>;
  private subs: Subscription = new Subscription();

  constructor(private quoteService: QuoteService, private route: ActivatedRoute) {

    this.subs.add(this.route.params.subscribe(params => {
      this.author = params.author.replace(' ', '+');
      console.log('author = ', this.author);
      this.quotes = this.quoteService.loadQuotes(this.author);
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
