import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider } from '../../providers/server';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
  
})
export class HomeComponent implements OnInit{

  @ViewChild('closeModalLoginButton') closeModalLoginButton: ElementRef;
  @ViewChild('closeModalCadastroButton') closeModalCadastroButton: ElementRef;
  @ViewChild('closeModalPswButton') closeModalPswButton: ElementRef;

  user: any = {};
  public posts: any = {};
  public showImg: boolean = true;
  email: any;
  password: any;

    constructor(private _router: Router, public server: ServerProvider) {
     
    }

    ngOnInit(){
      this.server.getSolvedDemands().then(response => {
        console.log(response);
        console.log(response.json());
    
        response = response.json();
        this.posts.push(response['dados']);
        this.showImg = false;
      }).catch(error => {
        console.log(error);
        });
    }
      confirm(user){

        this.server.createUser(this.user).then(response => {
          console.log(response);
          console.log(response["_body"]);
          let body = JSON.parse(response['_body']);
          console.log(body.token);
          this.closeModalCadastroButton.nativeElement.click();
          this._router.navigate(['/feed']);

        }).catch(error => {
          console.log(error);
          let body = JSON.parse(error['_body']);

          switch(body.erro.cadastro){

            case 8:{
              alert("Dados incorretos");
              break;
            }

            default:{
              alert("Erro");
              break;
            }
          }
        });
      }

      signin(mail, pass){
        this.server.loginUser(this.email,this.password).then(response => {
          console.log(response);
          console.log(response["_body"]);
          let body = JSON.parse(response['_body']);
          console.log(body.dados.name);
          this.server.token = body.token;
          this.server.user.name = body.dados.name;
          this.server.user.registry = body.dados.registry;
          this.server.user.identity = body.dados.identity;
          this.server.user.date_birth = body.dados.date_birth;
          this.server.user.email = body.dados.email;
          this.server.user.image_profile = body.dados.image_profile;
          this.closeModalLoginButton.nativeElement.click();
          this._router.navigate(['/feed']);
        }).catch(error => {
          console.log(error);
          let body = JSON.parse(error['_body']);

          switch(body.erro.login){

            case 10:{
              alert("Dados incorretos");
              break;
            }

            default:{
              alert("Erro");
              break;
            }
          }
        });
      }

      newPass(email){
        this.server.newPsw(this.email).then(response => {
          console.log(response);
          console.log(response["_body"]);
          this.closeModalPswButton.nativeElement.click();
          alert("Email enviado.");
        }).catch(error => {
          console.log(error);
          alert("Erro de dados.");
        });
      }

      clearInputs() {
        this.user = {};
        this.email ="";
        this.password ="";
       }
      
}
