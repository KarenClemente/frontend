import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.css']
})

export class FeedComponent {

  
  public posts: Array<any>;
  public likedPosts: Array<any>;

    constructor(private _router: Router, private server: ServerProvider) {
      
      this.posts = [];
      this.likedPosts = [];  

      this.posts.push(
        {
         id:1,
         title:'hushsuhus', 
         image:'./assets/img/poste.jpeg',
         location:'./assets/img/poste.jpeg',
         description:'./assets/img/poste.jpeg',
         likes:11,
         commentnum:2,
         ranking:1,
         liked:true,
         date:'11/11/2018',
         hour:'16:11',
         user:{
           name:'Funaaa',
           profilePicture:'./assets/img/avatar.png',
         }
        })      
  }

}
    