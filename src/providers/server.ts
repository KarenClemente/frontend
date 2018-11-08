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
  createUser(user) {
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

    console.log(body.toString());
    return this.http.post('http://sosunb.000webhostapp.com/api/api/user/', body.toString(), options).toPromise();
    }

  // Login
  loginUser(user){
    let headers = new Headers(
    {
        'Content-Type' : 'application/json',
    });
    let options = new RequestOptions({ headers: headers });
    let obj = {
        "email": user.email,
        "password": user.password,
    };
    return this.http.post('https://sosunb.000webhostapp.com/api/api/session/', obj, options).toPromise();
  }

  // Related demands
  getRelatedDemands(demand, idToken) {
    let headers = new Headers(
    {
        'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://www.sosunb/demands', demand, options).toPromise();
  };

  // type demands
  typeDemands(demand) {
    let headers = new Headers(
    {
        'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    let obj = {
        "demand": demand.type,
    };   
    return this.http.post('https://sosunb.000webhostapp.com/api/api/type-demand/', obj, options).toPromise();
  };

  // type problem
  typeProblem(demand) {
    let headers = new Headers(
    {
        'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    let obj = {
        "type": demand.category,
    };   
    return this.http.post('https://sosunb.000webhostapp.com/api/api/type-problem/', obj, options).toPromise();
  };
  
  // type problem
  likeDemand(demand, idToken) {
    let headers = new Headers(
    {
        'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    let obj = {
        "demands_id": demand.id,
    };   
    return this.http.post('https://sosunb.000webhostapp.com/api/api/type-problem/', obj, options).toPromise();
  };

  //change password
  changePsw(user, idToken){
    let headers = new Headers(
    {
       'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers});
    let obj = {
        "email": user.email,
    }    
    return this.http.put('https://sosunb.000webhostapp.com/api/api/user/', obj, options).toPromise();
    };

    //demands
    getAllDemands(page:number){
        
    }
}

