import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';
import { Observable } from 'rxjs';
import { parse } from 'url';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.css']
})

export class FeedComponent implements OnInit{

  @ViewChild('closeModalDangerButton') closeModalDangerButton: ElementRef;
  @ViewChild('closeModalChangeButton') closeModalChangeButton: ElementRef;

  public searchText : string;
  public posts: any = [];
  public users: Array<any>;
  public admin: Array<any>;
  public cont: number = 0;
  public id;
  public comment;

  email: any;
  password: any;
  pswconfirm: any;

  clearInputs() {
    this.email ="";
    this.password ="";
    this.pswconfirm = "";
   }


      constructor(private _router: Router, public server: ServerProvider) {

  }

  ngOnInit(){
    this.getPosts();
  }
  
  onScroll (){
    console.log('scrolled!!')
    this.getPosts();
  }

  getPosts(){
  this.server.getFeedDemands({},'',this.cont).then(response => {
    console.log(response);
    console.log(response.json());

    response = response.json();
  for (var i = 0; i < 5; i++){
    this.posts.push(response['dados'][i]);
   }
   this.cont += 5;
   this.users = this.posts.comments;

});
  }

  like(post){  
  //Remove like
  //parseInt(post.total_likes, 10);
  post.total_likes = Number(post.total_likes);
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
   
  delComment(comment){
    //Delete comment
      this.server.deleteComment(this.server.token,comment.comment_id).then(response => {
        console.log(response);
        this.posts.comments = this.posts.comments.filter(obj => {
          return obj.comment_id !== comment.comment_id;
        });
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

  changeInfo(accessToken, image, email, password, pswconfirm){
    this.server.updateInfo(this.server.token, image, email, password, pswconfirm).then(response => {
      console.log(response);
      this.closeModalChangeButton.nativeElement.click();
    }).catch(error => {
      console.log(error);
    });
  }

  logout(){
    this.server.token = "";
    this._router.navigate(['/home']);
    console.log(this.server.token)
  }
}
  
