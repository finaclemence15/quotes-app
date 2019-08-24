import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
  quote:Quotes [] = [
    new Quotes (1, ' Great things never come from comfort zones.','James',new Date(2019,3,14)),
    new Quotes (2,' Success doesn’t just find you. You have to go out and get it.' ,'Valens' ,new Date(2012,0,18)),
    new Quotes (3,' Little things make big days.' ,'John' ,new Date(2016,1,20)),
    new Quotes (4, '  It’s going to be hard, but hard does not mean impossible.' , 'Ange' ,new Date(2018,6,8)),
    new Quotes (5, ' Don’t wait for opportunity. Create it.', 'Jane',new Date(2015,7,1)),
  ];
  toggleDetails(index){
    this.quote[index].showAuthor = !this.quote[index].showAuthor;
  }
  completeQuotes(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  addNewQuotes(quotes ){
    let goalLength = this.quote.length;
    quotes .id = goalLength+1;
    quotes .completeDate = new Date(quotes .completeDate)
    this.quote.push(quotes )
  }

  // 
  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
