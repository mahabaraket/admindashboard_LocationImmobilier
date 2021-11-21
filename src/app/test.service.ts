import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
class bienImmobilier{
  
  id:String;
  caracteristique:String;
  adress:String;
  type:String;

}

@Injectable({
  providedIn: 'root'
})
export class TestService {
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
  private BiensUrl = 'http://localhost:8181/api/biens';


  constructor(private http:HttpClient) { }
  
  getBiens (): Observable<bienImmobilier[]> {
    return this.http.get<bienImmobilier[]>(this.BiensUrl).pipe(
      tap(_ => console.log('fetched Biens')),
      catchError(this.handleError<bienImmobilier[]>('getBiens', []))
    );
  }
}
