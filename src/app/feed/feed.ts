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
  @ViewChild('closeModalLogoutButton') closeModalLogoutButton: ElementRef;
  
  public posts: any = [];
  public user: any = [];
  public cont: number = 0;
  public id;
  public comment;
  public comment_id;
  public statusOptions: any = [];
  public usersComments: any = [];
  public adminComments: any = [];
  public status: any = '';
  public search: any = '';
  email: any;
  password: any;
  pswconfirm: any;

  constructor(private _router: Router, public server: ServerProvider) {
  }

  ngOnInit(){
    this.server.getStatus().then(response => {
      console.log(response);
      console.log(response.json());
      response = response.json();

      for (var i = 0; i < response['dados'].length; i++){
        this.statusOptions.push(response['dados'][i]);
       }
       console.log(this.statusOptions)
    }).catch(error => {
      console.log(error);
    });
    this.getPosts();
  }

  onScroll (){
    console.log('scrolled!!')
    this.getPosts();
  }

  getPosts(){
  this.server.getFeedDemands(this.search,this.status,this.cont).then(response => {
    console.log(response);
    console.log(response.json());

    response = response.json();
    for (var i = 0; i < response['dados'].length; i++){
    this.posts.push(response['dados'][i]);
    this.usersComments.push(response['dados'][i].comments);
    this.adminComments.push(response['dados'][i].answers);
   }
   console.log(this.usersComments);
   console.log(this.adminComments);
   this.cont += 5;
}).catch(error => {
  console.log(error);
          let body = JSON.parse(error['_body']);

          switch(body.erro.demandas){

            case 8:{
              alert("Dados incorretos");
              break;
            }

            default:{
              alert("Ainda nao existem publicações no SOSUNB!");
              break;
            }
          }
        });
  }

  setStatus(e): void {
    this.status = e.id;
    console.log(e);
    this.posts = [];
    this.cont = 0;
    this.getPosts();
  }

  setSearch(e): void {
    this.search = e;
    console.log(e);
    this.posts = [];
    this.cont = 0;
    this.getPosts();
  }

  getProfileDemands(){
    this.server.getSelectedDemands().then(response => {
      console.log(response);
    let body = JSON.parse(response['_body']);
    console.log(body.dados);
    this.server.problems = body.dados.reclamacao;
    this.server.suggestions = body.dados.sugestao;
    this.server.liked = body.dados.likes;
    this.server.commented = body.dados.comentarios;
    }).catch(error => {
      console.log(error);
    });
  }

  like(post){
  //Remove like
  //parseInt(post.total_likes, 10);
  post.total_likes = Number(post.total_likes);
  if (post.gave_like == "true"){
    this.server.unlikeDemand(post.demand_id).then(response => {
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
    this.server.likeDemand(post.demand_id).then(response => {
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
      this.server.commentDemand(post.demand_id, comment).then(response => {
        console.log(response);
        this.comment_id = response['_body'].dados.comment_id;
        post.comments.push({comment_id: this.comment_id, name: this.server.user.name, image_profile: this.server.user.image_profile, comment: comment, owner_comment:"true"});
      }).catch(error => {
        console.log(error);
      });

      this.comment = "";
  }

  delComment(post){
    //Delete comment
    console.log(post);
      this.server.deleteComment(post.comment_id).then(response => {
        console.log(response);
        for (var i = this.posts.comments.length - 1; i >= 0; --i) {
          if (this.posts[i].comments.comment_id == post.comments.comment_id){
            post.splice(i,1);
          }
        }
      }).catch(error => {
        console.log(error);
      });
  }

  report(){
    this.server.reportDemand(this.id).then(response => {
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

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.user.image = myReader.result;
      console.log(this.user.image);
    }
    myReader.readAsDataURL(file);
  }

  updateInfo(user){
    if(typeof user.email == 'undefined' || user.email == ''){
      this.user.email = this.server.user.email;
    }
    else{
    this.user.email = user.email;
    }

    this.server.updateInfo(this.user).then(response => {
      console.log(response);
      this.closeModalChangeButton.nativeElement.click();
    }).catch(error => {
      console.log(error);
    });
    if(typeof this.user.image == 'undefined' || this.user.image == ''){
      this.server.user.image_profile = this.server.user.image_profile;
    }
    else{
      this.server.user.image_profile = this.user.image;
    }
  }

  verifyPsw(user){
    if(user.password != user.pswconfirm || typeof user.password == 'undefined'){
      alert('Senhas devem ser iguais e conter no mínimo 6 caracteres')
    }
    else{
      this.updatePsw(user);
    }
  }

  updatePsw(user){
    this.server.updatePsw(user.password).then(response => {
      console.log(response);
      alert('Senha alterada com sucesso.')
      this.closeModalChangeButton.nativeElement.click();
    }).catch(error => {
      console.log(error);
      let body = JSON.parse(error['_body']);

          switch(body.erro.update){

            case 3:{
              alert("Senha deve ter no mínimo 6 caracteres");
              break;
            }

            default:{
              alert("Erro. Tente novamente.");
              break;
            }
          }
    })
  }

  delete(){
    this.server.deleteAccount().then(response => {
      console.log(response);
      this.closeModalChangeButton.nativeElement.click();
      this.logout();
    }).catch(error => {
      console.log(error);
    });
  }

  clearInputs() {
    this.user = {};
   }

  logout(){
    this.server.token = null;
    this._router.navigate(['/home']);
    this.closeModalLogoutButton.nativeElement.click();
  }
}
