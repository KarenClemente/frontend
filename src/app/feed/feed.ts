import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';
import { Post } from './post';
import { Comment } from './comment'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.css']
})

export class FeedComponent implements OnInit {

  sum = 10;
  throttle = 50;
  scrollDistance = 2;
  post: any = {};
  allPosts: Post[];
  originalPosts: Post[];
  obsPosts: Observable<Post[]>;
  comment: any = {};
  allComments: Comment[];
  obsComments: Observable<Comment[]>;
  
    constructor(private _router: Router, private server: ServerProvider) {
    
  }

  ngOnInit(){
    this.server.getAllPosts()
      .subscribe((response) => {
        this.originalPosts = response;
        this.allPosts = this.allPosts.slice(0,5);
      });
    this.server.getAllComments()
      .subscribe((comments) => {
        this.allComments = comments;
        this.comment = comments.slice(0,2);
  });
}

  onScrollDown(){
    if(this.allPosts.length < this.originalPosts.length){
      let len = this.allPosts.length;

      for(let i = len; i <= len+5; i++){
        this.allPosts.push(this.originalPosts[i]);
      }
    }
  }
}
    