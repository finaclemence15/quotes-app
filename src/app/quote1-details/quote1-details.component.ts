import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote1-details',
  templateUrl: './quote1-details.component.html',
  styleUrls: ['./quote1-details.component.css']
})
export class Quote1DetailsComponent implements OnInit {
  @Input() quotes:  Quotes;

  constructor() { }

  ngOnInit() {
  }

}
