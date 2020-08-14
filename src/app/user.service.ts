import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getUsersUrl = 'http://localhost:8080/ChatApp_war_exploded/Controller?action=GetUsers';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl)
  }
}
