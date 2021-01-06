import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostInterface } from '../../../../common/interfaces/post.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  public getPost(id: number): Observable<PostInterface> {
    return this.http.get<PostInterface>('/api/posts/'+id);
  }
}
