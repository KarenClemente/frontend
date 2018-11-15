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
    //return this.http.post('http://homol.redes.unb.br/sos-unb/api/user', body.toString(), options).toPromise();
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
    //return this.http.post('https://homol.redes.unb.br/sos-unb/api/session/', body.toString(), options).toPromise();
   // return this.http.post('http://sosunb.000webhostapp.com/api/api/session/', body.toString(), options).toPromise();
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
  
  // like demand
  likeDemand(demandId, accessToken) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', MY_TOKEN);
    body.set('demands_id','1');
    
    console.log(body.toString());
    return this.http.post(BASE_URL + '/like', body.toString(), options).toPromise();
    //return this.http.post('https://homol.redes.unb.br/sos-unb/api/like/', body.toString(), options).toPromise();
   // return this.http.post('http://sosunb.000webhostapp.com/api/api/like/', body.toString(), options).toPromise();
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

  //Feed demands
  getFeedDemands(params,token){
    let headers = new Headers(
        {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization': token,   
        });

    let options = new RequestOptions({ headers: headers});
    let body = new URLSearchParams();
    body.set('solved', params.solved);

    console.log(body.toString());
    return this.http.post('http://homol.redes.unb.br/sos-unb/api/feed_demands', body.toString(), options).toPromise();
    };

  //Ranking demands
  getRankingDemands(params,token){
    let headers = new Headers(
    {
        'Content-Type' : 'application/x-www-form-urlencoded', 
        'Authorization': token,  
    });
    
        let options = new RequestOptions({ headers: headers});
        let body = new URLSearchParams();
        body.set('campus', params.campus);
    
        console.log(body.toString());
        return this.http.post('http://homol.redes.unb.br/sos-unb/api/ranking_demands', body.toString(), options).toPromise();
    };

  //Profile demands
  getProfileDemands(params,token){
        let headers = new Headers(
            {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization': token,  
            });
    
        let options = new RequestOptions({ headers: headers});
        let body = new URLSearchParams();
        body.set('madeByMe', params.madeByMe);
        body.set('liked', params.liked);
    
        console.log(body.toString());
        return this.http.post('http://homol.redes.unb.br/sos-unb/api/user_demands', body.toString(), options).toPromise();
    };   
}

