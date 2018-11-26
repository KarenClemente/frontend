import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

@Component({
  selector: 'app-solved',
  templateUrl: './solved.html',
  styleUrls: ['./solved.css']
})

export class SolvedComponent implements OnInit{

  @ViewChild('closeModalDangerButton') closeModalDangerButton: ElementRef;
  @ViewChild('closeModalChangeButton') closeModalChangeButton: ElementRef;
  @ViewChild('closeModalLogoutButton') closeModalLogoutButton: ElementRef;

  public posts: any =[];
  public user: any =[];
  public id;
  public comment;
  email: any;
  password: any;
  pswconfirm: any;

  constructor(private _router: Router, public server: ServerProvider) {}

ngOnInit(){
  this.server.seeDemand().then(response => {
    console.log(response);
    console.log(response.json());

    response = response.json();
    for(var i=0; i < response['dados'].length; i++)
    this.posts.push(response['dados'][i]);
  }).catch(error => {
    console.log(error);
  });
}

like(post){
  post.total_likes = Number(post.total_likes);
//Remove like
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
    this.server.commentDemand(post.demand_id,comment).then(response => {
      console.log(response);
     // post.comments.length += 1;
     post.comments.push({name: this.server.user.name, image_profile: this.server.user.image_profile, comment: comment});
    }).catch(error => {
      console.log(error);
    });

    this.comment = "";
}

delComment(post){
  //Delete comment
    this.server.deleteComment(post.comment_id).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
}

report(post){
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
  this.server.token = "";
  this._router.navigate(['/home']);
  console.log(this.server.token);
  this.closeModalLogoutButton.nativeElement.click();
}
}
