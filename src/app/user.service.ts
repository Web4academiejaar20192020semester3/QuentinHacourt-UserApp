import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getUsersUrl = 'http://localhost:8080/ChatApp_war_exploded/Controller?action=GetUsers';
  private postUserUrl = 'http://localhost:8080/ChatApp_war_exploded/Controller?action=UpdateUser'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }

  updateUser(user: User) {
    alert(user.voornaam);
    this.http.post(this.postUserUrl, null, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      alert(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
