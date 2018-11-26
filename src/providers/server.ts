import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

const BASE_URL = "https://homol.redes.unb.br/sos-unb/api";


@Injectable()
export class ServerProvider {

    public user: any ={};
    public token: any;
    public demand: any = [];

    constructor(public http: Http) {}

//FEED
  getFeedDemands(search, status, limit){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('search', search);
    body.set('status', status);
    body.set('limit', limit);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/get-demands/feed', body.toString(), options).toPromise();
  }

//RANKING
  getRankingDemands(campus){
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded')

  let options = new RequestOptions({ headers: headers });
  let body = new URLSearchParams();
  console.log(campus);
  body.set('Authorization', this.token);
  body.set('campus', campus);

  console.log(body.toString());
  return this.http.post(BASE_URL + '/get-demands/ranking', body.toString(), options).toPromise();
  }

//DEMANDS
  getSelectedDemands(){
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
  likeDemand(params) {
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
  unlikeDemand(params) {
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
  commentDemand(params, comment){
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
  deleteComment(params){
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
  reportDemand(params){
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
  typeDemand(){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/type-demand/get', body.toString(),options).toPromise();
  }
  // Get campus
  getCampus(){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/campus/get', body.toString(),options).toPromise();
  }
  // Get status
  getStatus(){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/status/get', body.toString(),options).toPromise();
  }
  // Get area
  areaDemand(){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/area/get', body.toString(),options).toPromise();
  }
  // Get problem type
  categoryDemand(){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/type-problem/get', body.toString(),options).toPromise();
  }
  // Get local
  getLocal(demand){
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
  // Get similars
  getDemandsSimilar(demand){
    let headers = new Headers(
      {
          'Content-Type' : 'application/x-www-form-urlencoded',
      });
      let options = new RequestOptions({ headers: headers });
      let body = new URLSearchParams();
      body.set('Authorization', this.token);
      body.set('type_problems_id', demand.selectedCategory);
      body.set('type_demand_id', demand.selectedType);
      body.set('local_id', demand.hasOwnProperty('local_id')? demand.local_id: demand.selectedArea);
      body.set('campus', demand.selectedCampus);
      body.set('area_id', demand.selectedArea);
      body.set('environment', demand.selectedEnvironment);

      console.log(body.toString());
      return this.http.post(BASE_URL + '/get-demands/similar', body.toString(), options).toPromise();
  }
  // See demand
  seeDemand(){
    let headers = new Headers(
      {
          'Content-Type' : 'application/x-www-form-urlencoded',
      });
      let options = new RequestOptions({ headers: headers });
      let body = new URLSearchParams();
      body.set('Authorization', this.token);
      body.set('demands_id', this.demand);

      console.log(body.toString());
      return this.http.post(BASE_URL + '/get-demands/single', body.toString(), options).toPromise();
  }
  // Add demand
  newDemand(demand){
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
      body.set('local_id', demand.hasOwnProperty('local_id')? demand.local_id: '');
      body.set('campus_id', demand.selectedCampus);
      body.set('environment_id', demand.selectedEnvironment);
      body.set('image', demand.hasOwnProperty('image')? demand.image: '');

      console.log(body.toString());
      return this.http.post(BASE_URL + '/demands/add', body.toString(), options).toPromise();

  }

//PROFILE FUNCTIONS

  // Delete demand
  deleteDemand(demand_id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('demands_id', demand_id);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/demands/delete', body.toString(), options).toPromise();

  }
  // Change infos
  updateInfo(newinfo){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('image', newinfo.hasOwnProperty('image')? newinfo.image: '');
    body.set('email', newinfo.email);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/user/update', body.toString(),options).toPromise();
  }
  // Change Password
  updatePsw(password){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);
    body.set('password',password);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/user/update/password', body.toString(),options).toPromise();
  }
  // Delete account
  deleteAccount(){
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded')

    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.set('Authorization', this.token);

    console.log(body.toString());
    return this.http.post(BASE_URL + '/user/delete', body.toString(),options).toPromise();
  }
}
