import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class bienImmobilier{

        composition:any;    
        adress:any;
        etage:any;
        etat:boolean;
      //  picbyte:Byte[];
        prix:any;
        proprietaire:any;
        superficie:any;
        typologie:any;
}

@Injectable({
  providedIn: 'root'
})



export class bienservice {

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

  createbien(bien: bienImmobilier): Observable<any> {
    return this.http.post<bienImmobilier>(this.BiensUrl, bien, httpOptions).pipe(
      tap((newBien: bienImmobilier) => console.log(`added bien`)),
      catchError(this.handleError<bienImmobilier>('create'))
    );
  }


  updateBien(bien: bienImmobilier,id:any): Observable<any> {
    return this.http.put<bienImmobilier>(this.BiensUrl+"/"+ id,bien, httpOptions).pipe(
      tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<bienImmobilier>('update'))
    );
  }


  deleteBien(id:any) {
    return this.http.delete(this.BiensUrl+"/"+id).pipe(
     // tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<bienImmobilier>('delete'))
    );
  }

  findBienByid(id:any) {
    return this.http.get(this.BiensUrl+"/"+id).pipe(
     // tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<bienImmobilier>('delete'))
    );
  }

 
}
