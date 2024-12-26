import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://mp5edf04abd8492c7950.free.beeceptor.com/posts';
  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
