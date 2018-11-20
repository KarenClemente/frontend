import { Component,Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.html',
  styleUrls: ['./ranking.css']
})
export class RankingComponent implements OnInit {
public searchText : string;
  public posts: Array<any>;
  public likedPosts: Array<any>;
  public commentedPosts: Array<any>;
  
  constructor(private _router: Router, private server: ServerProvider) {
    
    this.posts = [];
    this.likedPosts = [];  

    /*
    
    image_demand:"",
    image_profile:"",
    total_likes:"",
    demand_id:"",
    title:"",
    description:"",
    created_date:"",
    name:"",
    local:"",
    status:"",
    campus:"",
    type_demand:"",
    owner_demands:"",
    gave_like: "",
    comments: [],
    answers: []

    */
}
ngOnInit(){
  this.server.getRankingDemands({},'').then(response => {
    console.log(response);
    console.log(response.json());

    response = response.json();
   // this.posts = response['dados'];
   for (var i = 0; i < response['dados'].length; i++){
    response['dados'][i].collapsed = false;
    this.posts.push(response['dados'][i]);
   }
  }).catch(error => {
    console.log(error);
  });
}

like(post){
  //Remove like
  if (this.likedPosts.indexOf(post.id)>-1){
    this.likedPosts.splice(this.likedPosts.indexOf(post.id),1);
    post.likes -= 1;

    this.server.unlikeDemand(this.server.token, 1).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
  //Add like
  else{
    this.likedPosts.push(post.id);
    post.likes += 1;

    this.server.likeDemand(this.server.token,1).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
 }

newComment(post){
   //Add comment
     this.commentedPosts.push(post.id);
     post.commentnum += 1;

     this.server.commentDemand(this.server.token,1,'comentário').then(response => {
       console.log(response);
     }).catch(error => {
       console.log(error);
     });
}
 
delComment(post){
   //Delete comment
     this.commentedPosts.push(post.id); //como tira?
     post.commentnum -= 1;

     this.server.deleteComment(this.server.token,1).then(response => {
       console.log(response);
     }).catch(error => {
       console.log(error);
     });
}
 
report(post){
   this.server.reportDemand(this.server.token,1).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}

comments(post){
   this.server.viewComments(this.server.token,1).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}

changeInfo(accessToken, image, email, password, pswconfirm){
   this.server.updateInfo(this.server.token, image, email, password, pswconfirm).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}

}
