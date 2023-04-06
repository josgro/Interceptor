import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}todos/${id}`);
  }
}
