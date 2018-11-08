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
      
      confirm(user){
        this.server.createUser(this.user).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      }

      signin(user){
        this.server.loginUser(this.user).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      }
}
