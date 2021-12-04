import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


class reclamation {
  type :any ;
  description:any;
  photo:any;
  date:any ;
  status:any;
}
@Injectable({
  providedIn: 'root'
})

export class ReclamationAdService {

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
  private ReclamationURL='http://localhost:9195/api/reclamations'
  constructor(private http:HttpClient) { }

  getReclamations(): Observable<reclamation[]> {
    return this.http.get<reclamation[]>(this.ReclamationURL).pipe(
      tap(_ => console.log('fetched Reclamations')),
      catchError(this.handleError<reclamation[]>('getReclamation', []))
    );
  }


  updateReclamation(reclamation: reclamation,id:any): Observable<any> {
    return this.http.put<reclamation>(this.ReclamationURL+"/"+ id,reclamation, httpOptions).pipe(
      tap((newReclamation: reclamation) => console.log(`update Reclamation`)),
      catchError(this.handleError<reclamation>('update'))
    );
  }


  deleteReclamation(id:any) {
    return this.http.delete(this.ReclamationURL+"/"+id).pipe(
     // tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<reclamation>('delete'))
    );
  }

  findReclamationByid(id:any) {
    return this.http.get(this.ReclamationURL+"/"+id).pipe(
     // tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<reclamation>('delete'))
    );
  }

 
}

