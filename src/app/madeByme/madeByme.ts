import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

@Component({
  selector: 'app-madeByme',
  templateUrl: './madeByme.html',
  styleUrls: ['./madeByme.css']
})
export class MadeByMeComponent implements OnInit{

  public posts: Array<any>;
  public demands: Array<any>;
  email: any;
  password: any;
  pswconfirm: any;

  clearInputs() {
    this.email ="";
    this.password ="";
    this.pswconfirm = "";
   }
  

  constructor(private _router: Router, private server: ServerProvider) {

    this.posts = [];
    this.demands = [];

  }

ngOnInit(){
  this.server.getSelectedDemands({}).then(response => {
    console.log(response);
    console.log(response.json());

    response = response.json();
   // this.posts = response['dados'];
   for (var i = 0; i < response['dados'].reclamacao.length; i++){
    response['dados'].reclamacao[i].collapsed = false;
    this.posts.push(response['dados'].reclamacao[i]);
   }
   for (var i = 0; i < response['dados'].sugestao.length; i++){
    response['dados'].sugestao[i].collapsed = false;
    this.demands.push(response['dados'].sugestao[i]);
   }

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

newComment(post, comment){
  //Add comment
    this.server.commentDemand(this.server.token,post.demand_id,comment).then(response => {
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

changeInfo(accessToken, image, email, password, pswconfirm){
   this.server.updateInfo(this.server.token, image, email, password, pswconfirm).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}
}
