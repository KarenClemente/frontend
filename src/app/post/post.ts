import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { $ } from 'protractor';
import { RadioControlValueAccessor } from '@angular/forms';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-post',
  templateUrl: './post.html',
  styleUrls: ['./post.css']
})
export class PostComponent {

  card1: boolean = true;
  card2: boolean = false;
  card3: boolean = false;
  card4: boolean = false;
  predio: boolean = true;
  posts: boolean = false;
  ambienteIn: boolean = false;
  ambienteOut: boolean = false;
  private selectedLink: string=" ";
  public postsSimilar: Array<any>;
  email: any;
  password: any;
  pswconfirm: any;

  clearInputs() {
    this.email ="";
    this.password ="";
    this.pswconfirm = "";
   }
  
    constructor(private _router: Router) {
      this.postsSimilar = [];

      this.postsSimilar.push(
        {
         id:0,
         title:'Poste perigoso', 
         image:'./assets/img/poste.jpeg',
         location:'ICC Norte',
         description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
         likes:11,
         commentnum:2,
         ranking:1,
         liked:true,
         date:'11/11/2018',
         hour:'16:11',
         showcomment:false,
         user:{
           name:'Funaaa',
           profilePicture:'./assets/img/avatar.png',
         },
         comment:{
          user:{name:'Gabriela',
          profilePicture:'./assets/img/avatar.png',
        }, 
          com:'hahahaha vish que coisa!',
        }},
        {
          id:1,
          title:'Poste perigoso', 
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomment:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},
        )  
    }

    proxcard(){
   
        this.card1 = !this.card1;
        this.card2 = !this.card2;
      }
    
    setradio(e:string): void {
    this.selectedLink = e; 
      }
      isSelected(name:string): boolean
      {
        if(!this.selectedLink){
          return false;
        }
        return (this.selectedLink === name);
      }
    
    ambiente(){
      if(this.selectedLink === "intern"){
        this.card2 = !this.card2;
        this.card3 = !this.card3;
      }else if (this.selectedLink == "extern"){
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
