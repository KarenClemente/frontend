import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added
import {ServerProvider} from '../../providers/server';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
  
})
export class HomeComponent {

  user: any = {};

    constructor(private _router: Router, public server: ServerProvider) {}
      goFeed() {
        // alert('test');
        // window.location.href = '../pages/test.html';
        this._router.navigate(['/feed']);
        // console.log('test');
        // this._router.navigateByUrl('src/app/teste/test.html');
      }

      confirm(user){
        this.server.createUser(this.user, "xxxxx").then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      }
}
