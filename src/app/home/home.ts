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

      passForgot(email){
        this.server.newPsw(this.email).then(response => {
          console.log(response);
          console.log(response["_body"]);
          this.closeModalPswButton.nativeElement.click();
          alert("Nova senha enviada.");
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
