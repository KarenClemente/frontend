import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

declare var bootbox: any;

@Component({
  selector: 'app-madeByme',
  templateUrl: './madeByme.html',
  styleUrls: ['./madeByme.css']
})
export class MadeByMeComponent implements OnInit{

  @ViewChild('closeModalDeleteButton') closeModalDeleteButton: ElementRef;
  @ViewChild('closeModalChangeButton') closeModalChangeButton: ElementRef;
  @ViewChild('closeModalLogoutButton') closeModalLogoutButton: ElementRef;

  public posts: any = [];
  public demands: any = [];
  public user: any = [];
  public mine: any =[];
  public id;
  public comment;
  email: any;
  password: any;
  pswconfirm: any;

    constructor(private _router: Router, public server: ServerProvider) {}

ngOnInit(){
  this.server.getSelectedDemands().then(response => {
    response = response.json();

    for (var i = 0; i < response['dados'].reclamacao.length; i++){
    response['dados'].reclamacao[i].collapsed = false;
    this.mine.push(response['dados'].reclamacao[i]);
   }
   for (var i = 0; i < response['dados'].sugestao.length; i++){
    response['dados'].sugestao[i].collapsed = false;
    this.demands.push(response['dados'].sugestao[i]);
   }
   this.posts = this.unique(this.mine.concat(this.demands));

    })
}

unique(a){
  return a.reduce(function(p,c){
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
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
      console.log(response);
        post.comments.push({comment_id: response['dados'].comment_id, name: this.server.user.name, image_profile: this.server.user.image_profile, comment: comment, owner_comment:"true"});
      }).catch(error => {
        console.log(error);
      });

      this.comment = "";
  }

  delComment(post, demand){
    //Delete comment
    console.log(post);
      this.server.deleteComment(post.comment_id).then(response => {
        response = response.json();
        console.log(response);
        for (var i = demand.comments.length - 1; i >= 0; --i) {
          if (demand.comments[i].comment_id == post.comment_id){
            demand.comments.splice(i,1);
          }
        }
      }).catch(error => {
        console.log(error);
      });
  }

deleteDemand(){
  this.server.deleteDemand(this.id).then(response => {
    this.closeModalDeleteButton.nativeElement.click();
    bootbox.alert({ 
      size: "small",
      title: "Atenção!",
      message: "A demanda foi excluída. Você não conseguirá mais visualizá-la.", 
      backdrop: true,
    })
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
