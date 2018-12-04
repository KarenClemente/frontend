import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider } from '../../providers/server';

declare var bootbox: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.html',
  styleUrls: ['./post.css']
})

export class PostComponent implements OnInit {

  @ViewChild('closeModalChangeButton') closeModalChangeButton: ElementRef;
  @ViewChild('closeModalDemandsButton') closeModalDemandsButton: ElementRef;
  @ViewChild('closeModalLogoutButton') closeModalLogoutButton: ElementRef;
  card1: boolean = true;
  card2: boolean = false;
  card3: boolean = false;
  posts: boolean = false;
  demandsSimilar: boolean = false;
  ambienteIn: boolean = false;
  public isEqual: boolean = true;
  public demands: any = [];
  public postsSimilar: any = [];
  public types: any = [];
  public campusArray: any = [];
  public areas: any = [];
  public categories: any = [];
  public locais: any = [];
  public environments: any = [];
  public user:any = [];
  email: any;
  password: any;
  pswconfirm: any;
  public comment;

    constructor(private _router: Router, public server: ServerProvider) {}

    // Functions
    ngOnInit(){
      this.server.typeDemand().then(response => {
        response = response.json();

        for (var i = 0; i < response['dados'].length; i++){
          this.types.push(response['dados'][i]);
         }
      });
      this.server.getCampus().then(response => {
        response = response.json();

        for (var i = 0; i < response['dados'].length; i++){
          this.campusArray.push(response['dados'][i]);
         }
      });
    }

    setType(e): void {
    this.demands.selectedType = e.id;
    }

    setCampus(e): void {
      if(typeof e == 'undefined'){
        
      }
      else{
      this.demands.selectedCampus = e.id;
    }
    }

    setArea(e): void {
    this.demands.selectedArea = e.id;
    }

    setCategory(e): void {
      if(typeof e == 'undefined'){
        
      }
      else{
      this.demands.selectedCategory = e.id;
    }
    }

    setLocal(e): void {
      if(this.ambienteIn == true && typeof e.selectedValueLocal == 'undefined'){
        bootbox.alert({ 
          size: "small",
          title: "Atenção!",
          message: "Selecione o local.", 
          backdrop: true,
        })
      }
      else if(this.ambienteIn == false){
      this.demands.local_id = '';
      this.setEnvironment(e);
      }
      else{
      this.demands.local_id = e.selectedValueLocal.id;
      this.setEnvironment(e);
      }
    }

    setEnvironment(e): void {
      if(typeof e.selectedValueEnvironment == 'undefined'){
        bootbox.alert({ 
          size: "small",
          title: "Atenção!",
          message: "Selecione um ambiente.", 
          backdrop: true,
        })
      }
      else{
      this.demands.environment = e.selectedValueEnvironment.id;
      this.getSimilars();
    }
    }

    getCard2(){
      this.server.areaDemand().then(response => {
        response = response.json();
        for (var i = 0; i < response['dados'].length; i++){
          this.areas.push(response['dados'][i]);
         }
      });
      this.server.categoryDemand().then(response => {
        response = response.json();
        for (var i = 0; i < response['dados'].length; i++){
          this.categories.push(response['dados'][i]);
         }
      });
    }

    local(){
      this.server.getLocal(this.demands).then(response => {
        response = response.json();
        if (response['dados'].local.length != 0){
          this.ambienteIn = true;
        }
        for (var i = 0; i < response['dados'].local.length; i++){
          this.locais.push(response['dados'].local[i]);
         }
         for (var i = 0; i < response['dados'].environment.length; i++){
          this.environments.push(response['dados'].environment[i]);
         }
      })
    }

    getSimilars(){
      this.server.getDemandsSimilar(this.demands).then(response => {
      response = response.json();
      if (response['dados'].length != 0){
      this.demandsSimilar = true;
      this.postsSimilar = [];
      for(var i=0; i < response['dados'].length; i++){
      this.postsSimilar.push(response['dados'][i]);
      }
      }
      else{
      this.demandsSimilar = false;
      this.postsSimilar = [];
      }
    }).catch(error => {
      try{
      }
      catch(e){
       
      }
    });

    document.getElementById("modalSimilar").click();
  }

    seeDemand(post){
      this.server.demand = post.demand_id;
      this.closeModalDemandsButton.nativeElement.click();
      this._router.navigate(['/solved']);
    }

    addDemand(demands){
      this.demands.title = demands.title;
      this.demands.description = demands.description;
      if(typeof this.demands.title == 'undefined' || typeof this.demands.description == 'undefined'){
        bootbox.alert({ 
          size: "small",
          title: "Ops, algo aconteceu..",
          message: "Inclua um título e uma descrição para sua demanda.", 
          backdrop: true,
        })
      }
      else{
      this.server.newDemand(this.demands);
      this._router.navigate(['/feed']);
      }
    }

    changeListener($event) : void {
      this.readThis($event.target);
    }

    readThis(inputValue: any): void {
      var file:File = inputValue.files[0];
      var myReader:FileReader = new FileReader();

      myReader.onloadend = (e) => {
        this.demands.image = myReader.result;
      }
      myReader.readAsDataURL(file);
    }

    changePhoto($event) : void {
      this.readThisPhoto($event.target);
    }

    readThisPhoto(inputValue: any): void {
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
  
        if(body.hasOwnProperty('erro')){
        switch(body.erro.update){
  
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
      if(user.password != user.passwordconfirm || typeof user.password == 'undefined'){
        this.isEqual = false;
        }
      else{
        this.isEqual = true;
      }
    }
  
    updatePsw(user){
      if(typeof user.password == 'undefined' || typeof user.passwordconfirm == 'undefined'){
        bootbox.alert({ 
          size: "small",
          title: "Ops, algo aconteceu..",
          message: "As senhas devem ser iguais e conter no mínimo 6 digitos.", 
        })
      }
      else{
      this.server.updatePsw(user.password).then(response => {
        bootbox.alert({ 
          size: "small",
          title: "Atenção!",
          message: "Senha alterada com sucesso.", 
        })
        this.closeModalChangeButton.nativeElement.click();
      }).catch(error => {
        let body = JSON.parse(error['_body']);
        if(body.hasOwnProperty('erro')){
        switch(body.erro.password){
  
        case 3:{
          bootbox.alert({ 
            size: "small",
            title: "Ops, algo aconteceu..",
            message: "Preecnha os campos. A senha deve conter no mínimo 6 dígitos.", 
            backdrop: true,
          })
          break;
        }
        default:{
          bootbox.alert({ 
            size: "small",
            title: "Ops, algo aconteceu..",
            message: "Preecnha os campos. A senha deve conter no mínimo 6 dígitos.", 
            backdrop: true,
          })
          break;
        }
        }
      }
      })
    }
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
      this.isEqual = true;
    }

    logout(){
      this.server.token = null;
      this._router.navigate(['/home']);
      this.closeModalLogoutButton.nativeElement.click();
    }
    // Seleção de cards
    proxcard(){
      if(typeof this.demands.selectedType == 'undefined'){
        bootbox.alert({ 
          size: "small",
          title: "Atenção!",
          message: "Marque o tipo de sua demanda.", 
          backdrop: true,
        })
      }
       else if(typeof this.demands.selectedCampus == 'undefined'){
        bootbox.alert({ 
          size: "small",
          title: "Atenção!",
          message: "Selecione um campus.", 
          backdrop: true,
        })
       }
       else{      
      this.getCard2();
      this.card1 = !this.card1;
      this.card2 = !this.card2;
       }
    }

    ambiente(){
      if(typeof this.demands.selectedArea == 'undefined'){
        bootbox.alert({ 
          size: "small",
          title: "Atenção!",
          message: "Marque a área onde sua demanda está localizada.", 
          backdrop: true,
        })
      }
       else if(typeof this.demands.selectedCategory == 'undefined'){
        bootbox.alert({ 
          size: "small",
          title: "Atenção!",
          message: "Selecione uma categoria para sua demanda.", 
          backdrop: true,
        })
       }
       else{ 
      this.local();
      this.card2 = !this.card2;
      this.card3 = !this.card3;
      }
    }

    demand(){
      this.closeModalDemandsButton.nativeElement.click();
      this.card3 = !this.card3;
      this.posts = !this.posts;
    }

}
