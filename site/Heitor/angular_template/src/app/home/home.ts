import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

    constructor(private _router: Router) {}

    test() {
        // alert('test');
        // window.location.href = '../pages/test.html';
        this._router.navigate(['/test']);
        // console.log('test');
        // this._router.navigateByUrl('src/app/teste/test.html');
      }

}
