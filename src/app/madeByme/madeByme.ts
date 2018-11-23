import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

@Component({
  selector: 'app-madeByme',
  templateUrl: './madeByme.html',
  styleUrls: ['./madeByme.css']
})
export class MadeByMeComponent implements OnInit{

  @ViewChild('closeModalDangerButton') closeModalDangerButton: ElementRef;
  @ViewChild('closeModalChangeButton') closeModalChangeButton: ElementRef;

  public posts: Array<any>;
  public demands: Array<any>;
  email: any;
  password: any;
  pswconfirm: any;
  public id;
  public comment;

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
  post.total_likes = Number(post.total_likes);
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
     // post.comments.length += 1;
     post.comments.push({name: 'Mari', image_profile: '../../assets/img/avatar.png', comment: comment});
    }).catch(error => {
      console.log(error);
    });

    this.comment = "";
}
 
delComment(post){
  //Delete comment
    this.server.deleteComment(this.server.token,post.comment_id).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
}

report(post){
  this.server.reportDemand(this.server.token,this.id).then(response => {
    console.log(response);
    this.closeModalDangerButton.nativeElement.click();
  }).catch(error => {
    console.log(error);
  });
}

reportId(post){
  this.id = post.demand_id;
  console.log(this.id);
}
logout(){
  this.server.token = "";
  this._router.navigate(['/home']);
}

}
