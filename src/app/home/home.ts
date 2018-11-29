import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider } from '../../providers/server';

declare var bootbox: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']

})

export class HomeComponent implements OnInit{

  @ViewChild('closeModalLoginButton') closeModalLoginButton: ElementRef;
  @ViewChild('closeModalCadastroButton') closeModalCadastroButton: ElementRef;
  @ViewChild('closeModalPswButton') closeModalPswButton: ElementRef;
  @ViewChild('closeModalTermsButton') closeModalTermsButton: ElementRef;


  email: any;
  password: any;
  user: any = {};
  public posts: any = [];
  public showImg: boolean = true;
  public aceitoTermo: boolean = false;


    constructor(private _router: Router, public server: ServerProvider) {}


    clearCheckbox(){
      this.aceitoTermo == true;
    }

      ngOnInit(){
      this.server.getSolvedDemands().then(response => {
      response = response.json();
      if (response['dados'].length > 5){
        this.showImg = false;
      for (var i = 0; i < response['dados'].length; i++){
        this.posts.push(response['dados'][i]);
      }
      }
      }).catch(error => {
        try{
          let body = JSON.parse(error['_body']);
          switch(body.erro.home){
          }
        }
        catch(e){
        }
        });
      }

      setTermo(): void {
        if(this.aceitoTermo==false){
        this.aceitoTermo = true;}
        else{
          this.aceitoTermo=false;
        }


      }

      confirm(user){
        this.server.createUser(user).then(response => {
          this.signin(user.email,user.password);
        }).catch(error => {
          try{
          let body = JSON.parse(error['_body']);

          if(body.hasOwnProperty('erro')){
          switch(body.erro.cadastro){
            case 1:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Todos os campos são requeridos para cadastro.",
                backdrop: true,
              })
              break;
            }
            case 3:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Senha deve conter no mínimo 6 digitos.",
                backdrop: true,
              })
              break;
            }
            case 5:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Cadastro já existe.",
                backdrop: true,
              })
              break;
            }
            case 6:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Email inválido.",
                backdrop: true,
              })
              break;
            }
            case 8:{
              bootbox.alert({
                title: "Ops, algo aconteceu..",
                message: "Dados não correspondem com registros da UNB. Verifique se os dados estão corretos. (Dica): Retire os acentos do seu nome.",
                backdrop: true,
              })
              break;
            }

            default:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Erro. Por favor, tente novamente.",
                backdrop: true,
              })
              break;
            }
          }
        }
      }
          catch(e){
            bootbox.alert({
              size: "small",
              title: "Ops, algo aconteceu..",
              message: "Servidor indisponível. Por favor tente novamente."
            })
          }
        });

        this.closeModalTermsButton.nativeElement.click();
        this.closeModalCadastroButton.nativeElement.click();

      }

      signin(email, password){
          this.server.loginUser(email,password).then(response => {
          let body = JSON.parse(response['_body']);
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
          try{
          let body = JSON.parse(error['_body']);

          if(body.hasOwnProperty('erro')){
          switch(body.erro.login){
            case 1:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Todos os campos são requeridos para login.",
                backdrop: true,
              })
              break;
            }

            case 10:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Verifique se seu dados estão corretos.",
                backdrop: true,
              })
              break;
            }

            default:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Verifique se seu dados estão corretos.",
                backdrop: true,
              })
              break;
            }
          }
        }
      }
        catch(e){
          bootbox.alert({
            size: "small",
            title: "Ops, algo aconteceu..",
            message: "Servidor indisponível. Por favor tente novamente.",
            backdrop: true,
          })
        }
        });
      }

      newPass(email){
        this.server.newPsw(email).then(response => {
          this.closeModalPswButton.nativeElement.click();
        }).catch(error => {
          try{
            let body = JSON.parse(error['_body']);

            if(body.hasOwnProperty('erro')){
            switch(body.erro.recover){

            case 6:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Verifique se seu email está correto.",
                backdrop: true,
              })
              break;
            }

            default:{
              bootbox.alert({
                size: "small",
                title: "Ops, algo aconteceu..",
                message: "Erro. Por favor, tente novamente.",
                backdrop: true,
              })
              break;
            }
          }
        }}
          catch(e){
            bootbox.alert({
              size: "small",
              title: "Ops, algo aconteceu..",
              message: "Servidor indisponível. Por favor tente novamente.",
              backdrop: true,
            })
          }
        });
      }

      clearInputs() {
        this.user = {};
        this.email ="";
        this.password ="";
        this.aceitoTermo == false;



        }

      }

}
