import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

@Component({
  selector: 'app-madeByme',
  templateUrl: './madeByme.html',
  styleUrls: ['./madeByme.css']
})
export class MadeByMeComponent{

  public posts: Array<any>;
  public likedPosts: Array<any>;
  public commentedPosts: Array<any>;
  
  constructor(private _router: Router, private server: ServerProvider) {
    
    this.posts = [];
    this.likedPosts = [];  

    this.posts.push(
      {
        id:1,
        title:'Poste perigoso', 
        image:'./assets/img/poste.jpeg',
        location:'ICC Norte',
        description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
        likes:11,
        commentnum:2,
        ranking:1,
        liked:true,
        date:'11/11/2018',
        hour:'16:11',
        collapsed:false,
        showcomment:false,
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
        title:'Poste perigoso', 
        image:'./assets/img/poste.jpeg',
        location:'ICC Norte',
        description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
        likes:11,
        commentnum:2,
        ranking:1,
        liked:true,
        date:'11/11/2018',
        hour:'16:11',
        collapsed:false,
        showcomment:false,
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
        title:'Poste perigoso', 
        image:'./assets/img/poste.jpeg',
        location:'ICC Norte',
        description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
        likes:11,
        commentnum:2,
        ranking:1,
        liked:true,
        date:'11/11/2018',
        hour:'16:11',
        collapsed:false,
        showcomment:false,
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
        title:'Poste perigoso', 
        image:'./assets/img/poste.jpeg',
        location:'ICC Norte',
        description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
        likes:11,
        commentnum:2,
        ranking:1,
        liked:true,
        date:'11/11/2018',
        hour:'16:11',
        collapsed:false,
        showcomment:false,
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
        title:'Poste perigoso', 
        image:'./assets/img/poste.jpeg',
        location:'ICC Norte',
        description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
        likes:11,
        commentnum:2,
        ranking:1,
        liked:true,
        date:'11/11/2018',
        hour:'16:11',
        collapsed:false,
        showcomment:false,
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

like(post){
  //Remove like
  if (this.likedPosts.indexOf(post.id)>-1){
    this.likedPosts.splice(this.likedPosts.indexOf(post.id),1);
    post.likes -= 1;

    this.server.unlikeDemand(this.server.token, 1).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
  //Add like
  else{
    this.likedPosts.push(post.id);
    post.likes += 1;

    this.server.likeDemand(this.server.token,1).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
 }

newComment(post){
   //Add comment
     this.commentedPosts.push(post.id);
     post.commentnum += 1;

     this.server.commentDemand(this.server.token,1,'comentário').then(response => {
       console.log(response);
     }).catch(error => {
       console.log(error);
     });
}

editComment(post){
   //Edit comment
     this.server.editComment(this.server.token,1,'comentário editado').then(response => {
         console.log(response);
       }).catch(error => {
         console.log(error);
       });
}
   
delComment(post){
   //Delete comment
     this.commentedPosts.push(post.id); //como tira?
     post.commentnum -= 1;

     this.server.deleteComment(this.server.token,1).then(response => {
       console.log(response);
     }).catch(error => {
       console.log(error);
     });
}
 
report(post){
   this.server.reportDemand(this.server.token,1).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}

comments(post){
   this.server.viewComments(this.server.token,1).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}

changeInfo(accessToken, image, mail, pass){
   this.server.updateInfo(this.server.token, image, mail, pass).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}
}