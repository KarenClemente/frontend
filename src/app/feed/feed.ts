import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';
import { Post } from './post';
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
  obsPosts: Observable<Post[]>;
  public comments = [];

    constructor(private _router: Router, private server: ServerProvider) {
    
   /* this.comments = [];
    this.comments.push({

      id:0,
      com:"isso ai ta ai nao sei uanto tempo agaygaysahkjshjha ha jhsjksjkjd snkjsn dkjs ndk jnjksndkjsnkjsdndkn,m",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    id:1,
    com:"isso ai ta ai nao sei uanto tempo agaygaysahkjshjha ha jhsjksjkjd snkjsn dkjs ndk jnjksndkjsnkjsdndkn,m",
    user: {
      name: "Fulano de tal",
      profilePicture: "../../assets/img/avatar.png",
    }
    },
    {
    id:2,
    com:"isso ai ta ai nao sei uanto tempo agaygaysahkjshjha ha jhsjksjkjd snkjsn dkjs ndk jnjksndkjsnkjsdndkn,m",
    user: {
      name: "Fulano de tal",
      profilePicture: "../../assets/img/avatar.png"
    }
    },
    {
      id:3,
      com:"isso ai ta ai nao sei uanto tempo agaygaysahkjshjha ha jhsjksjkjd snkjsn dkjs ndk jnjksndkjsnkjsdndkn,m",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
        id:4,
        com:"isso ai ta ai nao sei uanto tempo agaygaysahkjshjha ha jhsjksjkjd snkjsn dkjs ndk jnjksndkjsnkjsdndkn,m",
        user: {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
    }
    },
    );*/
  
  }

  ngOnInit(){
    this.server.getAllPosts()
      .subscribe(posts => this.allPosts = posts);
    this.obsPosts = this.server.getAllPosts();
  }
}
    