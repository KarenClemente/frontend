import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.css']
})
export class FeedComponent {

    constructor(private _router: Router) {}

    goPerfil() {
      // alert('test');
      // window.location.href = '../pages/test.html';
      this._router.navigate(['/perfilsec']);
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
