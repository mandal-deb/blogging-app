import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  constructor(public blogService:BlogService, private router:ActivatedRoute) { }

  blogIndex:any;
  username:string="";
  comment:string="";

  ngOnInit(): void {
    if(this.blogService.blogData.length==0){
      this.blogService.fetchBlogs().then((res:any)=>{
        console.log(res);
        this.blogService.blogData=res;
      }).catch((err)=>{
        console.log(err);
      })
    }
    this.blogIndex=this.router.snapshot.paramMap.get('blogindex');
  }
  
addcomment(){
  let obj={username :this.username,comment:this.comment};
  this.blogService.blogData[this.blogIndex].comments.push(obj);
  this.blogService.updateBlog(this.blogService.blogData[this.blogIndex]).then((res)=>{
console.log(res);
this.username="";
this.comment="";
  }).catch((err)=>{
console.log(err);
  })
}
}
