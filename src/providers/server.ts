import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, of, from } from 'rxjs';
import { User } from '../app/staff/user';
import { Post } from '../app/feed/post';
import { Comment } from '../app/feed/comment'
import {catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerProvider implements PipeTransform {

    POSTS = [
        new Post(
    
            0,
            'Poste com defeito',
            '../../assets/img/poste.jpeg',
            'Estacionamento',
            'Poste com defeito no estacionamento da FT blablaabla',
            123,
            4,
            1,
            true,
            '28/09/2018',
            '16:30',
            {
              name: "Fulano de tal",
              profilePicture: "../../assets/img/avatar.png"
            }
    ),
      new Post(
      
        1,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        2,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        3,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        4,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        5,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        6,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        7,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        8,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        9,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        10,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        11,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        12,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        13,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        14,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    new Post(
      
        15,
        'Poste com defeito',
        '../../assets/img/poste.jpeg',
        'Estacionamento',
        'Poste com defeito no estacionamento da FT blablaabla',
        123,
        4,
        1,
        true,
        '28/09/2018',
        '16:30',
        {
          name: "Fulano de tal",
          profilePicture: "../../assets/img/avatar.png"
        }
    ),
    ];

    USERS = [
        new User('130125288','Mariana Varanda','varandaeng@gmail.com', '7263817','29/12/1929'),
        new User('120048374','Lucas Correa Cerqueira Soares','lcorrea@gmail.com', '7263817','29/12/1929'),
        new User('10006381637','Josias Martins da Silva','josilva@gmail.com', '7263817','29/12/1929'),
        new User('1001735266','Manoel Gamalhaes Souza','manoa@gmail.com', '7263817','29/12/1929'),
        new User('130999920','Marina Gadelha Lima','marinalima@gmail.com', '7263817','29/12/1929'),
        new User('11725472046','Ana Beatriz Cavalcante do Planalto','anabcp@gmail.com', '7263817','29/12/1929'),
        new User('09008373622','Roberto Oliveira Soares Martins','betomartins@gmail.com', '7263817','29/12/1929'),
        new User('1527364826','Ana Galvão','anag@gmail.com', '7263817','29/12/1929')
    ];    

    COMMENTS = [
        new Comment(0,'eita vish maria',{name:'Fumaloj shshhs', profilePicture:'../../assets/img/avatar.png'}),
        new Comment(1,'eita vish maria',{name:'Fumaloj shshhs', profilePicture:'../../assets/img/avatar.png'}),
        new Comment(2,'eita vish maria',{name:'Fumaloj shshhs', profilePicture:'../../assets/img/avatar.png'}),
        new Comment(3,'eita vish maria',{name:'Fumaloj shshhs', profilePicture:'../../assets/img/avatar.png'})
    ]
    public cusId: any;
    public hasCusId: boolean;
    public user: any;
    
    constructor(public http: Http) {
      this.hasCusId = false;
      this.user = {};
  }

  transform(users: User[], value: string): any[] {
    if (!users) {
        return [];
    }
    if (!users || !value) {
        return users;
    }

    return users.filter(singleItem =>
        singleItem[this.user].toLowerCase().includes(value.toLowerCase())
    );
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

    getAllUsers(): Observable<User[]>{
        return of(this.USERS);
    }
    getAllPosts(): Observable<Post[]>{
        return of(this.POSTS);
    }
    getAllComments(): Observable<Comment[]>{
        return of(this.COMMENTS);
    }
    add(user){
        let maxIndex = this.USERS.length-1;
        let objWithMaxIndex = this.USERS[maxIndex];
        this.USERS.push(new User(user.registry, user.name, user.email, user.identity, user.date_birth));
    }
    remove(registry:string){
        let obj = this.USERS.find(ob => ob.registry === registry);
        this.USERS.splice(this.USERS.indexOf(obj), 1);
    }
}

