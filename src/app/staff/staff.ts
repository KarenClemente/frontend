import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerProvider} from '../../providers/server';
import { User } from './user';
import { Router } from '@angular/router'; // Added

@Pipe({
  name: 'filter'
})

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

      clearInputFields(e){
        let all = e.target.querySelectorAll('input');
         Object.keys(all).forEach(key => {
             console.log(all[key].value = '');   
         });    
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