import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
  quote:Quotes [] = [
    {id:1, name:' Great things never come from comfort zones.'},
    {id:2, name:' Success doesn’t just find you. You have to go out and get it.'},
    {id:2, name:' Little things make big days.'},
    {id:2, name:'  It’s going to be hard, but hard does not mean impossible.'},
    {id:2, name:' Don’t wait for opportunity. Create it.'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
