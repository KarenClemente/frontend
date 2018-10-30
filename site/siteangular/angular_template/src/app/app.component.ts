import { Component } from '@angular/core';
 import { Router } from '@angular/router'; // Added

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

   constructor(private _router: Router) {
    this._router.navigate(['/home']);
   }


  test() {
    // alert('test');
    // window.location.href = '../pages/test.html';
    this._router.navigate(['/test']);
    // console.log('test');
    // this._router.navigateByUrl('src/app/teste/test.html');
  }
}
