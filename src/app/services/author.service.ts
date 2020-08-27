import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = "https://localhost:8000/author";

  constructor(private http: HttpClient) { }
  getAll(): Observable<Author[]>
  {
    return this.http.get<Author[]>(this.url);
  }
  get(id: number): Observable<Author>{
    return this.http.get<Author>(`${this.url}/${id}`);
  }
  create(author: Author): Observable<Author>{
    return this.http.post<Author>(this.url, author);
  }
  update(author: Author): Observable<Author>{
    return this.http.put<Author>(`${this.url}/${author.id}`, author);
  }
//
  delete(id: number): Observable<any>{
     return this.http.delete(`${this.url}/${id}`);
  }
}
