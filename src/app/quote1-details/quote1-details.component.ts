import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote1-details',
  templateUrl: './quote1-details.component.html',
  styleUrls: ['./quote1-details.component.css']
})
export class Quote1DetailsComponent implements OnInit {
  @Input() quotes:  Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  // quotesComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  public upvote: number = 0
  like(upvote){
    this.upvote +=1
  }
  public downvote: number = 0
  dislike(downvote){
    this.downvote +=1
  }


  constructor() { }

  ngOnInit() {
  }

}
