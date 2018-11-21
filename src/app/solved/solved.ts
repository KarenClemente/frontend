import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

@Component({
  selector: 'app-solved',
  templateUrl: './solved.html',
  styleUrls: ['./solved.css']
})
export class SolvedComponent implements OnInit{

  public posts: Array<any>;
  
  constructor(private _router: Router, private server: ServerProvider) {
    
    this.posts = [];
}

ngOnInit(){
  this.server.getSelectedDemands({}).then(response => {
    console.log(response);
    console.log(response.json());

    response = response.json();
    this.posts = response['dados'];
  }).catch(error => {
    console.log(error);
  });
}

like(post){  
//Remove like
if (post.gave_like == "true"){
  this.server.unlikeDemand(this.server.token, post.demand_id).then(response => {
  console.log(response);
  post.total_likes -= 1;
  post.gave_like = "false";
  console.log(post.gave_like);
  }).catch(error => {
    console.log(error);
  });
}
//Add like
else{
  this.server.likeDemand(this.server.token,post.demand_id).then(response => {
    console.log(response);
    post.total_likes += 1;
    post.gave_like = "true";
    console.log(post.gave_like);
    console.log(post.total_likes);
  }).catch(error => {
    console.log(error);
  });
}
}

newComment(post){
   //Add comment
     this.server.commentDemand(this.server.token,1,'comentário').then(response => {
       console.log(response);
     }).catch(error => {
       console.log(error);
     });
}

delComment(post){
   //Delete comment
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
   this.server.updateInfo(this.server.token,image, email, password, pswconfirm).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}

}