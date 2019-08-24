import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote1-form',
  templateUrl: './quote1-form.component.html',
  styleUrls: ['./quote1-form.component.css']
})
export class Quote1FormComponent implements OnInit {
  newQuotes = new Quotes(0,"","",new Date());
  @Output() addQuotes = new EventEmitter<Quotes>();

  submitQuotes(){
this.addQuotes.emit(this.newQuotes);
  }
  constructor() { }

  ngOnInit() {
  }

}
