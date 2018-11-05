import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.css']
})
export class FeedComponent {

  public posts = []; 

    constructor(private _router: Router) {

    this.posts= [];
    this.posts.push({
    
      id:0,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:1,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:2,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:3,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:4,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:5,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:6,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:7,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:8,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:9,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:10,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:11,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:12,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:0,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:13,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    {
    
      id:14,
      title: "Poste com defeito",
      image: "../../assets/img/poste.jpeg",
      location: "Estacionamento",
      description: "Poste com defeito no estacionamento da FT blablaabla",
      likes: 123,
      comments: 4,
      ranking: 1,
      liked: true,
      date: "28/09/2018",
      hour: "16:30",
      user: {
        name: "Fulano de tal",
        profilePicture: "../../assets/img/avatar.png"
      }
    },
    )};

    doInfinite(infiniteScroll){
      console.log('Begin async operation');
      setTimeout(() => {
        for (let i = 0; i < 5; i++){
          this.posts.push({
              id:this.posts.length,
              title: "PC quebrado",
              image: "../../assets/img/pc.jpg",
              location: "Laboratório",
              description: "Computador levemente danificado no LCCC",
              likes: 370,
              comments: 2,
              ranking: 2,
              liked: true,
              date: "15/10/2018",
              hour: "09:15",
              user: {
                name: "Fulano de tal",
                profilePicture: "../../assets/img/avatar.png"
            }
          });
        }

        console.log('Async operation has endes');
        infiniteScroll.complete();
      },500);
    }

}
