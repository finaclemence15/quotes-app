import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
  quote:Quotes [] = [
    {id:1, name:' Great things never come from comfort zones.', author:'James'},
    {id:2, name:' Success doesn’t just find you. You have to go out and get it.' , author:'Valens'},
    {id:2, name:' Little things make big days.' , author:'John'},
    {id:2, name:'  It’s going to be hard, but hard does not mean impossible.' , author:'Ange'},
    {id:2, name:' Don’t wait for opportunity. Create it.', author:'Jane'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
