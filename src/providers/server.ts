import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';

//const BASE_URL = "http://sosunb.000webhostapp.com/api";
const BASE_URL = "http://homol.redes.unb.br/sos-unb/api";


@Injectable()
export class ServerProvider {
 

    public user: any ={};
    public token: any;
    //public token: any = "eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ob21vbC5yZWRlcy51bmIuYnJcL3Nvcy11bmJcL2FwaVwvIiwic3ViIjoiMjIiLCJleHAiOjE1NDMwNTcwNjIsImlhdCI6MTU0Mjk3MDY2MiwidXNlciI6Ik1hcmlhbmEgZGUgQXNzdW5jYW8gVmFyYW5kYSJ9.1D-L76Uso99aA9RVtob3y-4fHBAezdBOYGBCRAxxIvQ"; 

    constructor(public http: Http) {
  }

//FEED
  getFeedDemands(accessToken, params, limit){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });  
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('status', params.hasOwnProperty('status')? params.status: '');
    body.set('limit', limit);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/get-demands/feed', body.toString(), options).toPromise();
  }
  
//RANKING
  getRankingDemands(accessToken, params){
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded')

  let options = new RequestOptions({ headers: headers });  
  let body = new URLSearchParams();
  body.set('Authorization', this.token);
  body.set('campus', params.hasOwnProperty('campus')? params.campus: '');

  console.log(body.toString());
  return this.http.post(BASE_URL + '/get-demands/ranking', body.toString(), options).toPromise();
  }  

//DEMANDS
  getSelectedDemands(accessToken){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
  
    let options = new RequestOptions({ headers: headers });  
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
  
    console.log(body.toString());
    return this.http.post(BASE_URL + '/get-demands/profile', body.toString(), options).toPromise();
  }
  
//SOLVED
  getSolvedDemands(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
  
    let options = new RequestOptions({ headers: headers });  
    let body = new URLSearchParams();
  
    console.log(body.toString());
    return this.http.post(BASE_URL + '/get-demands/resolved', body.toString(), options).toPromise();
  }


//HOME PAGE

  // Registration
  createUser(user) {
    let headers = new Headers(
    {
        'Content-Type' : 'application/x-www-form-urlencoded',
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
    return this.http.post(BASE_URL + '/user/register', body.toString(), options).toPromise();
}

  // Login
  loginUser(email, password){
    let headers = new Headers(
    {
        'Content-Type' : 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams ();
    body.set('email', "varandaeng@gmail.com");
    body.set('password', "123456");
    
    console.log(body.toString());
    return this.http.post(BASE_URL + '/sessions/login', body.toString(), options).toPromise();
  }

  // Forgot password
  newPsw(email){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('email', email);
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/sessions/recover', body.toString(),options).toPromise();
  }

//POSTS FUNCTIONS

  // like demand
  likeDemand(accessToken, params) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('demands_id', params);
    
    console.log(body.toString());
    return this.http.post(BASE_URL + '/like/add', body.toString(), options).toPromise();
  };

  // Unlike demand
  unlikeDemand(accessToken, params) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('demands_id', params);
    
    console.log(body.toString());
    return this.http.post(BASE_URL + '/like/delete', body.toString(), options).toPromise();
  };

  // New comment
  commentDemand(accessToken, params, comment){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
    
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('demands_id',params);
    body.set('comment',comment);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/coments/add', body.toString(),options).toPromise();
    }

  // Delete comment
  deleteComment(accessToken, params){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('comment_id', params);
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/coments/delete', body.toString(),options).toPromise();
  }

  // Report demand
  reportDemand(accessToken, params){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('demands_id',params);
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/demands/report', body.toString(),options).toPromise();
  }

//POST PAGE

//PROFILE FUNCTIONS

// Change infos
  updateInfo(accessToken, photo, email, newPass, newPassConf){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('image',photo);
    body.set('email', email);
    body.set('newPass', newPass);
    body.set('newPassConf', newPassConf);
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/?', body.toString(),options).toPromise();
  }

  // Delete account
  deleteAccount(accessToken, email){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('email', email);
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/?', body.toString(),options).toPromise();
  }
}

