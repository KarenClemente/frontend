import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerProvider } from '../../providers/server';
import { User } from './user';
import { FilterPipe } from '../../filter/filter';
import { Router } from '@angular/router'; // Added


@Component({
  selector: 'app-staff',
  templateUrl: './staff.html',
  styleUrls: ['./staff.css']
})
export class StaffComponent implements OnInit {

    user: any = {};
    allUsers: User[];
    obsUsers: Observable<User[]>
    public searchString: string;

    constructor(private _router: Router, private server: ServerProvider) {

    }

    ngOnInit(){
      this.server.getAllUsers()
          .subscribe(users => this.allUsers = users);
      this.obsUsers = this.server.getAllUsers();  
         
    }

    add(){
      this.server.add(this.user);
    }

    remove(user){
      this.server.remove(this.user);
    }

  

    goRanking() {
      // alert('test');
      // window.location.href = '../pages/test.html';
      this._router.navigate(['/ranking']);
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
    goDashboard(){
      this._router.navigate(['/dashboard']);
    }
   
}