import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider } from '../../providers/server';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
  
})
export class HomeComponent {

  @ViewChild('closeModalLoginButton') closeModalLoginButton: ElementRef;
  @ViewChild('closeModalCadastroButton') closeModalCadastroButton: ElementRef;
  @ViewChild('closeModalPswButton') closeModalPswButton: ElementRef;

  user: any = {};
  email: any;
  password: any;

    constructor(private _router: Router, public server: ServerProvider) {
     
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
          console.log(body.token);
          this.server.token = body.token;
          this.closeModalLoginButton.nativeElement.click();
          this._router.navigate(['/feed']);

          this.server.infoUser(this.server.token).then(response => {
          console.log(response);
          let body = JSON.parse(response['dados']);
          this.server.user.name = body.name;
          this.server.user.registry = body.registry;
          this.server.user.identity = body.identity;
          this.server.user.date_birth = body.date_birth;
          this.server.user.email = body.email;
          this.server.user.image_profile = body.image_profile;
          console.log(this.server.user.name);
          console.log(this.server.user.registry);
          console.log(this.server.user.identity);
          console.log(this.server.user.date_birth);
          console.log(this.server.user.email);
          console.log(this.server.user.image_profile);

        })
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
