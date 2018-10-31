import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FilterPipe } from '../filter/filter';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ServerProvider {
    
    CHARACTERS = [
    {
        registry: '130125288',
        name: 'Mariana Varanda',
        email: 'varandaeng@gmail.com'
    },
    {
        registry: '120048374',
        name: 'Lucas Correa Cerqueira Soares',
        email: 'lcorrea@gmail.com'
    },
    {
        registry: '10006381637',
        name: 'Josias Martins da Silva',
        email: 'josilva@gmail.com'
    },
    {
        registry: '1001735266',
        name: 'Manoel Gamalhaes Souza',
        email: 'manoa@gmail.com'
    },
    {
        registry: '130999920',
        name: 'Marina Gadelha Lima',
        email: 'marinalima@gmail.com'
    },
    {
        registry: '11725472046',
        name: 'Ana Beatriz Cavalcante do Planalto',
        email: 'anabcp@gmail.com'
    },
    {
        registry: '09008373622',
        name: 'Roberto Oliveira Soares Martins',
        email: 'betomartins@gmail.com'
    },
    {
        registry: '1527364826',
        name: 'Ana Galvão',
        email: 'anag@gmail.com'
    },
    ];    

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

    getCharacters(): Observable<any[]>{
        return Observable.of(this.CHARACTERS);
    }
    getColumns(): string[]{
        return["registry","name","email"]
    }
}

