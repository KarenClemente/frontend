import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';

const BASE_URL = "http://sosunb.000webhostapp.com/api";
//const BASE_URL = "http://homol.redes.unb.br/sos-unb/api";
const MY_TOKEN = "eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zb3N1bmIuMDAwd2ViaG9zdGFwcC5jb21cL2FwaVwvIiwic3ViIjoiMSIsImV4cCI6MTU0MjM5MjgwNCwiaWF0IjoxNTQyMzA2NDA0LCJ1c2VyIjoiVXNlciAxIiwicHJvZmlsZV90eXBlX2lkIjoiMiJ9.4N6pBZEKl-YIF0kU4TjF3tZaLmz9m3poC62cS1JoR5w";


@Injectable()
export class ServerProvider {
 

    public cusId: any;
    public hasCusId: boolean;
    public user: any;
    public token: any;

    constructor(public http: Http) {
      this.hasCusId = false;
      this.user = {};
  }

//FEED
  getFeedDemands(accessToken, params){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });  
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('solved', params.solved);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/feed_demands', body.toString(), options).toPromise();
  }
  
//RANKING
  getRankingDemands(accessToken, params){
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded')

  let options = new RequestOptions({ headers: headers });  
  let body = new URLSearchParams();
  body.set('Authorization', MY_TOKEN);
  body.set('campus', params.hasOwnProperty('campus')? params.campus: 1);

  console.log(body.toString());
  return this.http.post(BASE_URL + '/get-demands/ranking', body.toString(), options).toPromise();
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
    return this.http.post(BASE_URL + '/user', body.toString(), options).toPromise();
}

  // Login
  loginUser(email, password){
    let headers = new Headers(
    {
        'Content-Type' : 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams ();
    body.set('email', email);
    body.set('password', password);
    
    console.log(body.toString());
    return this.http.post(BASE_URL + '/sessions', body.toString(), options).toPromise();
  }

  // Forgot password
  newPsw(email){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('email', email);
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/?', body.toString(),options).toPromise();
  }

//POSTS FUNCTIONS

  // like demand
  likeDemand(accessToken, demandId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('demands_id','1');
    
    console.log(body.toString());
    return this.http.post(BASE_URL + '/like', body.toString(), options).toPromise();
  };

  // Unlike demand
  unlikeDemand(accessToken, demandId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('demands_id','1');
    
    console.log(body.toString());
    return this.http.post(BASE_URL + '/like/delete', body.toString(), options).toPromise();
  };

  // View comments
  viewComments(accessToken, demandId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('demands_id','1');
    
    console.log(body.toString());
    return this.http.post(BASE_URL + '?', body.toString(), options).toPromise(); 
  };

  // New comment
  commentDemand(accessToken, demandId, comment){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
    
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('demands_id','1');
    body.set('comments','Comentário teste');

    console.log(body.toString());
    return this.http.post(BASE_URL + '/?', body.toString(),options).toPromise();
  }

  // Delete comment
  deleteComment(accessToken, commentId){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('comment_id','1');
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/comments/delete', body.toString(),options).toPromise();
  }

  // Report demand
  reportDemand(accessToken, demandId){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('demands_id','1');
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/?', body.toString(),options).toPromise();
  }

//POST PAGE

//PROFILE FUNCTION
  
  // Change infos
  updateInfo(accessToken, photo, email, newPass, newPassConf){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
     
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('image',photo);
    body.set('email', email);
    body.set('newPass', newPass);
    body.set('newPassConf', newPassConf);
 
    console.log(body.toString());
    return this.http.post(BASE_URL + '/?', body.toString(),options).toPromise();
  }
}

