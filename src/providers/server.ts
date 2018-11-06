import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, of, from } from 'rxjs';
import {catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerProvider {
 

    public cusId: any;
    public hasCusId: boolean;
    public user: any;
    
    constructor(public http: Http) {
      this.hasCusId = false;
      this.user = {};
  }

  

  // Registration
  createUser(user, idToken) {
    let headers = new Headers(
    {
        'Content-Type' : 'application/x-www-form-urlencoded',
        // 'Authorization':  'Bearer ' + idToken
    });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('name', user.name);
    body.set('email', user.email);
    body.set('registry', user.registry);
    body.set('identity', user.identity);
    body.set('password', user.password);
    body.set('conf_password', user.password);
    body.set('date_birth', user.date_birth);
    /*body.set('name', 'Fillipe Barros Rodrigues');
    body.set('email', 'fillipefbr@hotmail.com');
    body.set('registry', '140139494');
    body.set('identity', '3206592');
    body.set('password', '123123');
    body.set('conf_password', '123123');
    body.set('date_birth', '06/06/1996');*/
    /*let obj = {
        "name": user.name,
        "email": user.email,
        "registry": user.registry,
        "password": user.password,
        "identity": user.identity,
        "date_birth": user.date_birth
    };*/
    // return this.http.post('https://www.sosunb/createUser', obj, options).toPromise();
    console.log(body.toString());
    return this.http.post('http://sosunb.000webhostapp.com/api/api/user/', body.toString(), options).toPromise();
  }

  // Login
  loginUser(user, idToken) {
    let headers = new Headers(
    {
        'Content-Type' : 'application/json',
        'Authorization':  'Bearer ' + idToken
    });
    let options = new RequestOptions({ headers: headers });
    let obj = {
        "email": user.email,
        "password": user.password
    };
    return this.http.post('https://www.sosunb/logInUser', obj, options).toPromise();
  }

  // Related demands
  getRelatedDemands(demand, idToken) {
    let headers = new Headers(
    {
        'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://www.sosunb/demands', demand, options).toPromise();
  }

    
}

