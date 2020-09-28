import { Component } from '@angular/core';
import { Quotes } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quotes[] = [
    new Quotes(1, 'Quoted by Winston Churchill.', 'Never bend your head. Always hold it high. Look the world straight in the eye.',new Date(2020,3,14)),
    new Quotes(2,'Quoted by Mutahi Kagwe','If You can get it ,I can get it,anyone can get it',new Date(2020,6,9)),
    new Quotes(3,'Quoted by Crevance Kate','Ignorance and prejudice are fuelling the spread of a preventable disease.  World AIDS Day, 1 December is an opportunity for people worldwide to unite in the fight against HIV and AIDS.',new Date(2013,1,12)),
    new Quotes(4,'Quoted by  Aggie Cromwell','Magic is really very simple, all you’ve got to do is want something and then let yourself have it.',new Date(2019,4,18)),
    new Quotes(5,'Quoted by Phil Nickinson','The future of mobile is the future of online. It is how people access online content now.',new Date(2019,2,14)),
    new Quotes(6,'Quoted by Ahonen aknon','Growth of computer and technology careers is becoming more and more industry-agnostic.',new Date(2030,3,14)),

  ];

  
   
  
}


