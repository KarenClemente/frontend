import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

declare var bootbox: any;

@Component({
  selector: 'app-liked',
  templateUrl: './liked.html',
  styleUrls: ['./liked.css']
})
export class LikedComponent implements OnInit{

  @ViewChild('closeModalDangerButton') closeModalDangerButton: ElementRef;
  @ViewChild('closeModalChangeButton') closeModalChangeButton: ElementRef;
  @ViewChild('closeModalLogoutButton') closeModalLogoutButton: ElementRef;

  public posts: any = [];
  public demands: any = [];
  public user: any = [];
  public id;
  public comment;
  email: any;
  password: any;
  pswconfirm: any;

    constructor(private _router: Router, public server: ServerProvider) {}

  ngOnInit(){
    this.server.getSelectedDemands().then(response => {
      response = response.json();

      for (var i = 0; i < response['dados'].likes.length; i++){
      response['dados'].likes[i].collapsed = false;
      this.posts.push(response['dados'].likes[i]);
     }
     for (var i = 0; i < response['dados'].comentarios.length; i++){
      response['dados'].comentarios[i].collapsed = false;
      this.demands.push(response['dados'].comentarios[i]);
     }
      })
  }

  like(post){
    //Remove like
    post.total_likes = Number(post.total_likes);
    if (post.gave_like == "true"){
      this.server.unlikeDemand(post.demand_id).then(response => {
      post.total_likes -= 1;
      post.gave_like = "false";
      })
    }
    //Add like
    else{
      this.server.likeDemand(post.demand_id).then(response => {
        post.total_likes += 1;
        post.gave_like = "true";
      })
    }
  }

  newComment(post, comment){
    //Add comment
    this.server.commentDemand(post.demand_id, comment).then(response => {
      response = response.json();
        post.comments.push({comment_id: response['dados'].comment_id, name: this.server.user.name, image_profile: this.server.user.image_profile, comment: comment, owner_comment:"true"});
      }).catch(error => {
      });

      this.comment = "";
  }

  delComment(post, demand){
    //Delete comment
      this.server.deleteComment(post.comment_id).then(response => {
        response = response.json();
        for (var i = demand.comments.length - 1; i >= 0; --i) {
          if (demand.comments[i].comment_id == post.comment_id){
            demand.comments.splice(i,1);
          }
        }
      }).catch(error => {
      });
  }

  report(){
    this.server.reportDemand(this.id).then(response => {
      this.closeModalDangerButton.nativeElement.click();
      bootbox.alert({ 
          size: "small",
          title: "Atenção!",
          message: "A demanda foi denunciada. Você não conseguirá mais visualizá-la.", 
          backdrop: true,
        })
        for(var i = this.posts.length - 1; i >= 0; --i) {
          if (this.posts[i].demand_id == this.id){
            this.posts.splice(i,1);
          }
          else if(this.demands[i].demand_id == this.id) {
            this.demands.splice(i,1);
          }
        }
    })
  }

  reportId(post){
    this.id = post.demand_id;
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.user.image = myReader.result;
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
      this.closeModalChangeButton.nativeElement.click();
    }).catch(error => {
      let body = JSON.parse(error['_body']);

      switch(body.erro.cadastro){

      case 6:{
        bootbox.alert({ 
          size: "small",
          title: "Ops, algo aconteceu..",
          message: "Email inválido.",
          backdrop: true, 
        })
        break; 
      }
      
      default:{
        bootbox.alert({
          size: "small",
          title: "Ops, algo aconteceu..",
          message: "Erro.",
          backdrop: true, 
        })
      }
    }
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
      bootbox.alert({ 
        size: "small",
        title: "Ops, algo aconteceu..",
        message: "As senhas devem ser iguais e conter no mínimo 6 digitos.", 
      })
      }
    else{
      this.updatePsw(user);
    }
  }

  updatePsw(user){
    this.server.updatePsw(user.password).then(response => {
      bootbox.alert({ 
        size: "small",
        title: "Atenção!",
        message: "Senha alterada com sucesso.", 
      })
      this.closeModalChangeButton.nativeElement.click();
    }).catch(error => {
      let body = JSON.parse(error['_body']);
      switch(body.erro.password){

      case 3:{
        bootbox.alert({ 
          size: "small",
          title: "Ops, algo aconteceu..",
          message: "Senha deve conter no mínimo 6 dígitos.", 
          backdrop: true,
        })
        break;
      }
      default:{
        bootbox.alert({ 
          size: "small",
          title: "Ops, algo aconteceu..",
          message: "Erro.", 
          backdrop: true,
        })
        break;
      }
      }
    })
  }

  delete(){
    this.server.deleteAccount().then(response => {
      this.closeModalChangeButton.nativeElement.click();
      bootbox.alert({ 
        size: "small",
        title: "Atenção",
        message: "Conta deletada com sucesso.", 
        backdrop: true,
      })
      this.logout();
      })
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
