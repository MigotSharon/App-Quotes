import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quotesDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  quotesUpvoteNumber: number = 0
  quotesUpvote() {
    this.quotesUpvoteNumber++;
  }
  quotesDownvoteNumber: number = 0
  quotesDownvote() {
    this.quotesDownvoteNumber++;
  }


  constructor() { }

  ngOnInit(): void {
  }

}