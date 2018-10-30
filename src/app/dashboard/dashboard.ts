import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

    constructor(private _router: Router) {}

    goPerfi() {
      // alert('test');
      // window.location.href = '../pages/test.html';
      this._router.navigate(['/solved']);
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
    goStaff(){
      this._router.navigate(['/staff']);
    }
}
