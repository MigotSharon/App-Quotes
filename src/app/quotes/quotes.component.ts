import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Quote by Walt Disney.', 'The way to get started is to quit talking and begin doing.', new Date(2020, 3, 14)),
    new Quotes(2, 'Quote by Winston Churchil', 'The pessimist see difficult in every opportunity.The optimist sees opportunity in every difficulty', new Date(2020, 6, 9)),
    new Quotes(3, 'Quote by Will Rodgers', 'Dont let yesterday take up too much of today.', new Date(2013, 1, 12)),
    new Quotes(4, 'Quote by OG MANDINO', 'Failure will never overtake me if my determination to succeed is strong enough.', new Date(2019, 4, 18)),
    new Quotes(5, 'Quote by MAYA ANGELOU', 'We may encounter many defeats but we  must not be defeated.', new Date(2019, 2, 14)),
    new Quotes(6, 'Quote by Johan Wolfgang', 'Knowing is not enough; we must apply Wishing is not enough;we must do.', new Date(2030, 3, 14)),
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuotes(quotes) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }



  constructor() { }

  ngOnInit() {
  }

}