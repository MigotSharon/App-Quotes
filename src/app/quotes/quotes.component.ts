import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Quoted by Winston Churchill.', 'Never bend your head. Always hold it high. Look the world straight in the eye.', new Date(2020, 3, 14)),
    new Quotes(2, 'Quoted by Mutahi Kagwe', 'If You can get it ,I can get it,anyone can get it', new Date(2020, 6, 9)),
    new Quotes(3, 'Quoted by Crevance Kate', 'Ignorance and prejudice are fuelling the spread of a preventable disease.  World AIDS Day, 1 December is an opportunity for people worldwide to unite in the fight against HIV and AIDS.', new Date(2013, 1, 12)),
    new Quotes(4, 'Quoted by  Aggie Cromwell', 'Magic is really very simple, all you’ve got to do is want something and then let yourself have it.', new Date(2019, 4, 18)),
    new Quotes(5, 'Quoted by Phil Nickinson', 'The future of mobile is the future of online. It is how people access online content now.', new Date(2019, 2, 14)),
    new Quotes(6, 'Quoted by Ahonen aknon', 'Growth of computer and technology careers is becoming more and more industry-agnostic.', new Date(2030, 3, 14)),
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

