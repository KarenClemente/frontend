import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider } from '../../providers/server';

@Component({
  selector: 'app-post',
  templateUrl: './post.html',
  styleUrls: ['./post.css']
})
export class PostComponent implements OnInit {

  card1: boolean = true;
  card2: boolean = false;
  card3: boolean = false;
  card4: boolean = false;
  predio: boolean = true;
  posts: boolean = false;
  
  ambienteIn: boolean = false;
  ambienteOut: boolean = false;
  private selectedArea: string=" ";
  private selectedType: string=" ";
  private selectedCampus: string=" ";
  private selectedCategory: string=" ";
  public postsSimilar: Array<any>;
  public types: any = [];
  public campusArray: any = [];
  public areas: any = [];
  public categories: any = [];
  email: any;
  password: any;
  pswconfirm: any;
  public comment;
  type: any;
  campus: any;
 
    constructor(private _router: Router, private server: ServerProvider) {}
    
    // Functions
    ngOnInit(){
      this.server.typeDemand({}).then(response => {
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
      this.server.getCampus({}).then(response => {
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

    getCard2(){
      this.server.areaDemand({}).then(response => {
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
      this.server.categoryDemand({}).then(response => {
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

    clearInputs() {
      this.email ="";
      this.password ="";
      this.pswconfirm = "";
    }

    logout(){
      this.server.token = "";
      this._router.navigate(['/home']);
    }
    // Seleção de cards
    proxcard(){
   this.card1 = !this.card1;
   this.card2 = !this.card2;
   this.getCard2();
    }

    setType(e): void {
    this.selectedType = e.area; 
    console.log(this.selectedType);
    }

    setCampus(e): void {
      this.selectedCampus = e.campus; 
      console.log(this.selectedCampus);
    }
    
    setArea(e): void {
    this.selectedArea = e.area; 
    console.log(this.selectedArea);
    }

    setCategory(e): void {
      this.selectedCategory = e.type; 
      console.log(this.selectedCategory);
      }

    ambiente(){
      if(this.selectedArea === "Interno"){
        this.card2 = !this.card2;
        this.card3 = !this.card3;
      }else if (this.selectedArea == "Externo"){
        this.card2 = !this.card2;
        this.card4 = !this.card4;
        this.ambienteOut = !this.ambienteOut;    
      }
      else
      alert('Marque uma opção de espaço.');
  
    }
    lastpart(){
      this.card3 = !this.card3;
      this.card4 = !this.card4;
      this.ambienteIn = !this.ambienteIn;
    }
    demand(){
      this.card4 = !this.card4;
      this.posts = !this.posts;
    }

}
