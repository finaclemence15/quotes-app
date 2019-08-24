import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
  quote:Quotes [] = [
    new Quotes (1, ' Great things never come from comfort zones.','James'),
    new Quotes (2,' Success doesn’t just find you. You have to go out and get it.' ,'Valens'),
    new Quotes (3,' Little things make big days.' ,'John'),
    new Quotes (4, '  It’s going to be hard, but hard does not mean impossible.' , 'Ange'),
    new Quotes (5, ' Don’t wait for opportunity. Create it.', 'Jane'),
  ];
  toggleDetails(index){
    this.quote[index].showAuthor = !this.quote[index].showAuthor;
  }

  constructor() { }

  ngOnInit() {
  }

}
