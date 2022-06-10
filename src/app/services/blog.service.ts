import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  public blogData:Array<any>=[];

  public postblog(data:any){
    return new Promise((resolve,reject)=>{
this.http.post('http://localhost:3000/blogs',data).subscribe(
  (res)=>{
    resolve(res);
  },
  (err)=>{
    reject(err);
  }
)
    })
  };
  public fetchBlogs(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost:3000/blogs').subscribe(
        (res)=>{resolve(res)},
        (err)=>{reject(err)}
      )
    })
  }

updateBlog(blogData:any){
return new Promise((resolve,reject)=>{
  this.http.put('http://localhost:3000/blogs/' + blogData.id, blogData).subscribe(
    (res)=>{resolve(res);
    },
    (err)=>{reject(err);
    }
  )
})
}
}
