import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added

@Component({
  selector: 'app-perfilindex',
  templateUrl: './perfilindex.html',
  styleUrls: ['./perfilindex.css']
})
export class PerfilindexComponent{

    constructor(private _router: Router) {}

    goPerfil() {
        // alert('test');
        // window.location.href = '../pages/test.html';
        this._router.navigate(['/perfilsec']);
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
      goRanking() {
        // alert('test');
        // window.location.href = '../pages/test.html';
        this._router.navigate(['/ranking']);
        // console.log('test');
        // this._router.navigateByUrl('src/app/teste/test.html');
      }


}