import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider } from '../../providers/server';

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
  ambienteIn: boolean = true;
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
        console.log(response);
        console.log(response.json());
        response = response.json();

        for (var i = 0; i < response['dados'].length; i++){
          this.types.push(response['dados'][i]);
         }
        console.log(this.types)
      }).catch(error => {
        console.log(error);
      });
      this.server.getCampus().then(response => {
        console.log(response);
        console.log(response.json());
        response = response.json();

        for (var i = 0; i < response['dados'].length; i++){
          this.campusArray.push(response['dados'][i]);
         }
         console.log(this.campusArray)
      }).catch(error => {
        console.log(error);
      });
    }

    setType(e): void {
    this.demands.selectedType = e.id;
    console.log(this.demands.selectedType);
    }

    setCampus(e): void {
      this.demands.selectedCampus = e.id;
      console.log(this.demands.selectedCampus);
    }

    setArea(e): void {
    this.demands.selectedArea = e.id;
    console.log(this.demands.selectedArea);
    }

    setCategory(e): void {
      this.demands.selectedCategory = e.id;
      console.log(this.demands.selectedCategory);
    }

    setLocal(e): void {
      this.demands.local_id = e.selectedValueLocal.id;
      console.log(this.demands.local_id);
    }

    setEnvironment(e): void {
      this.demands.selectedEnvironment = e.selectedValueEnvironment.id;
      console.log(this.demands.selectedEnvironment);
      this.setLocal(e);
    }

    getCard2(){
      this.server.areaDemand().then(response => {
        console.log(response);
        console.log(response.json());
        response = response.json();
        for (var i = 0; i < response['dados'].length; i++){
          this.areas.push(response['dados'][i]);
         }
        console.log(this.areas)
      }).catch(error => {
        console.log(error);
      });
      this.server.categoryDemand().then(response => {
        console.log(response);
        console.log(response.json());
        response = response.json();
        for (var i = 0; i < response['dados'].length; i++){
          this.categories.push(response['dados'][i]);
         }
        console.log(this.categories)
      }).catch(error => {
        console.log(error);
      });
    }

    local(){
      this.server.getLocal(this.demands).then(response => {
        console.log(response);
        console.log(response.json());
        response = response.json();
        if (response['dados'].local.length == 0){
          this.ambienteIn = false;
        }
        for (var i = 0; i < response['dados'].local.length; i++){
          this.locais.push(response['dados'].local[i]);
         }
         for (var i = 0; i < response['dados'].environment.length; i++){
          this.environments.push(response['dados'].environment[i]);
         }
        console.log(this.locais.length)
      }).catch(error => {
        console.log(error);
      });
    }

    getSimilars(){
      this.server.getDemandsSimilar(this.demands).then(response => {
        console.log(response);
        console.log(response.json());

    response = response.json();
    if (response['dados'].length > 0){
      this.demandsSimilar = true;
      console.log(this.demandsSimilar);
    for(var i=0; i < response['dados'].length; i++){
    this.postsSimilar.push(response['dados'][i]);
    }
    }
    else{

    }
    }).catch(error => {
        console.log(error);
    });
    }

    seeDemand(post){
      this.server.demand = post.demand_id;
      this.closeModalDemandsButton.nativeElement.click();
      this._router.navigate(['/solved']);
    }

    addDemand(demand){
    this.demands.title = demand.title;
    this.demands.description = demand.description;

    this.server.newDemand(this.demands).then(response => {
        console.log(response);
        this._router.navigate(['/feed']);
       }).catch(error => {
        console.log(error);
    });
    }

    changeListener($event) : void {
      this.readThis($event.target);
    }

    readThis(inputValue: any): void {
      var file:File = inputValue.files[0];
      var myReader:FileReader = new FileReader();

      myReader.onloadend = (e) => {
        this.demands.image = myReader.result;
        console.log(this.demands.image);
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
      this.closeModalLogoutButton.nativeElement.click();
    }
    // Seleção de cards
    proxcard(){
   this.card1 = !this.card1;
   this.card2 = !this.card2;
   this.getCard2();
    }

    ambiente(){
      this.local();
      this.card2 = !this.card2;
      this.card3 = !this.card3;
    }

    demand(){
      this.card3 = !this.card3;
      this.posts = !this.posts;
    }

}
