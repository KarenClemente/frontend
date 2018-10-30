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

  
    constructor(private _router: Router) {}

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
