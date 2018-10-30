import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.html',
  styleUrls: ['./ranking.css']
})
export class RankingComponent {

    constructor(private _router: Router) {}

    goPerfil() {
      // alert('test');
      // window.location.href = '../pages/test.html';
      this._router.navigate(['/perfilindex']);
      // console.log('test');
      // this._router.navigateByUrl('src/app/teste/test.html');
    }

    goFeed() {
      // alert('test');
      // window.location.href = '../pages/test.html';
      this._router.navigate(['/feed']);
      // console.log('test');
      // this._router.navigateByUrl('src/app/teste/test.html');
    }
   
}