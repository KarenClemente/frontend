import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.css']
})
export class FeedComponent {

    constructor(private _router: Router) {}

    onScroll () {
      console.log('scrolled!!')
  }
}
