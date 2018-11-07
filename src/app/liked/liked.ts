import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added

@Component({
  selector: 'app-liked',
  templateUrl: './liked.html',
  styleUrls: ['./liked.css']
})
export class LikedComponent{

  public posts: Array<any>;
  public likedPosts: Array<any>;

    constructor(private _router: Router) {
      
      this.posts = [];
      this.likedPosts = [];  

      this.posts.push(
        {
         id:0,
         title:'hushsuhus', 
         image:'./assets/img/poste.jpeg',
         location:'./assets/img/poste.jpeg',
         description:'./assets/img/poste.jpeg',
         likes:11,
         commentnum:2,
         ranking:1,
         liked:true,
         date:'11/11/2018',
         hour:'16:11',
         user:{
           name:'Funaaa',
           profilePicture:'./assets/img/avatar.png',
         },
         comment:{
          user:{name:'Gabriela',
          profilePicture:'./assets/img/avatar.png',
        }, 
          com:'hahahaha vish que coisa!',
        }},
        {
          id:1,
          title:'hushsuhus', 
          image:'./assets/img/poste.jpeg',
          location:'./assets/img/poste.jpeg',
          description:'./assets/img/poste.jpeg',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},{
          id:2,
          title:'hushsuhus', 
          image:'./assets/img/poste.jpeg',
          location:'./assets/img/poste.jpeg',
          description:'./assets/img/poste.jpeg',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},{
          id:3,
          title:'hushsuhus', 
          image:'./assets/img/poste.jpeg',
          location:'./assets/img/poste.jpeg',
          description:'./assets/img/poste.jpeg',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},{
          id:4,
          title:'hushsuhus', 
          image:'./assets/img/poste.jpeg',
          location:'./assets/img/poste.jpeg',
          description:'./assets/img/poste.jpeg',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},
         {
          id:5,
          title:'hushsuhus', 
          image:'./assets/img/poste.jpeg',
          location:'./assets/img/poste.jpeg',
          description:'./assets/img/poste.jpeg',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},
         {
          id:6,
          title:'hushsuhus', 
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'./assets/img/poste.jpeg',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},
         {
          id:7,
          title:'hushsuhus', 
          image:'./assets/img/poste.jpeg',
          location:'./assets/img/poste.jpeg',
          description:'./assets/img/poste.jpeg',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},{
          id:8,
          title:'hushsuhus', 
          image:'./assets/img/poste.jpeg',
          location:'./assets/img/poste.jpeg',
          description:'./assets/img/poste.jpeg',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          }, 
           com:'hahahaha vish que coisa!',
         }},
        )      
  }

}