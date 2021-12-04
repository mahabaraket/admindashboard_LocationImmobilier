import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class User{

  specialite:any;
  email:any;
  firstName:any;
  lastName:any;
  password:any;
  role:any;
}

@Injectable({
  providedIn: 'root'
})
export class TechService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private UsersUrl = 'http://localhost:8180/api/users';

  constructor(private http:HttpClient) { }


  getTech (): Observable<User[]> {
    return this.http.get<User[]>(this.UsersUrl).pipe(
      tap(_ => console.log('fetched Users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  createTech(User: User): Observable<any> {
    return this.http.post<User>(this.UsersUrl, User, httpOptions).pipe(
      tap((newUser: User) => console.log(`added User`)),
      catchError(this.handleError<User>('create'))
    );
  }


  updateTech(User: User,id:any): Observable<any> {
    return this.http.put<User>(this.UsersUrl+"/"+ id,User, httpOptions).pipe(
      tap((newUser: User) => console.log(`update User`)),
      catchError(this.handleError<User>('update'))
    );
  }


  deleteTech(id:any) {
    return this.http.delete(this.UsersUrl+"/"+id).pipe(
     // tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<User>('delete'))
    );
  }

  findTechByid(id:any) {
    return this.http.get(this.UsersUrl+"/"+id).pipe(
     // tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<User>('delete'))
    );
  }
}
