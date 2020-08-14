import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getUsersUrl = 'http://localhost:8080/ChatApp_war_exploded/Controller?action=GetUsers';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl)
  }

  updateUser(user: User) {
    const postUrl = 'http://localhost:8080/ChatApp_war_exploded/Controller?action=EditUser&voornaam=' + user.voornaam + '&naam=' + user.naam + '&age=' + user.leeftijd + '&geslacht=' + user.geslacht + '&email=' + user.email + '&userStatus=' + user.userStatus;
    this.http.post(postUrl, null );
  }

}
