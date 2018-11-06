export class Post {
    constructor(public id:number, public title:string, 
        public image:string, public location:string,
        public description:string, public likes:number,
        public commentnum:number,public ranking:number,
        public liked:boolean, public date:string, 
        public hour:string, public user){
    }
}