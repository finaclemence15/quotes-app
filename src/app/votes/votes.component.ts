import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  liked = 0;
  disliked = 0;
  like() {
    this.liked = this.liked + 1;
  }
  dislike() {
    this.disliked = this.disliked + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
