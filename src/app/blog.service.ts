import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
   // Remplacez par l'URL réelle de votre API
    
      constructor(public http: HttpClient) {}
    
      getArticles(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.apiUrl}`);
      }
    }
