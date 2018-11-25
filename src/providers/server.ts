import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

const BASE_URL = "https://homol.redes.unb.br/sos-unb/api";


@Injectable()
export class ServerProvider {

    public user: any ={};
    public token: any;

    constructor(public http: Http) {}

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

  // Get demand type
  typeDemand(accessToken){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/type-demand/get', body.toString(),options).toPromise();
  }
  // Get campus
  getCampus(accessToken){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/campus/get', body.toString(),options).toPromise();
  }
  // Get area
  areaDemand(accessToken){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/area/get', body.toString(),options).toPromise();
  }
  // Get problem type
  categoryDemand(accessToken){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/type-problem/get', body.toString(),options).toPromise();
  }
  // Get local
  getLocal(accessToken, demand){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('campus', demand.selectedCampus);
    body.set('area', demand.selectedArea);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/local/get', body.toString(),options).toPromise();
  }
  // Add demand
  newDemand(accessToken, demand){
    let headers = new Headers(
      {
          'Content-Type' : 'application/x-www-form-urlencoded',
      });
      let options = new RequestOptions({ headers: headers });
      let body = new URLSearchParams();
      body.set('Authorization', this.token);
      body.set('title', demand.title);
      body.set('description', demand.description);
      body.set('type_problems_id', demand.selectedCategory);
      body.set('type_demand_id', demand.selectedType);
      body.set('local_id', demand.hasOwnProperty('local_id')? demand.selectedLocal: 1);
      body.set('campus_id', demand.selectedCampus);
      body.set('environment_id', demand.selectedEnvironment);
      body.set('image', demand.hasOwnProperty('image')? demand.image: '');

      console.log(body.toString());
      return this.http.post(BASE_URL + '/demands/add', body.toString(), options).toPromise();
   
  }

//PROFILE FUNCTIONS

  // Change infos
  updateInfo(accessToken, newinfo){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('image',newinfo.hasOwnProperty('image')? newinfo.image: this.user.image_profile);
    body.set('email', newinfo.hasOwnProperty('email')? newinfo.email: this.user.email);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/user/update', body.toString(),options).toPromise();
  }

  // Change Password
  updatePsw(accessToken, user){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('password',user.password);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/user/update/password', body.toString(),options).toPromise();
  }
  // Delete account
  deleteAccount(accessToken){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/user/delete', body.toString(),options).toPromise();
  }
}
