import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class Contrat{
  contrat:any;
  contratname:any;
  dateDebut:any;
  dateFin:any;
  email:any;
  localisation:any;
  name:any;

}

@Injectable({
  providedIn: 'root'
})
export class ContartService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for Contrat consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private ContratsUrl = 'http://localhost:9195/api/contrats';


  constructor(private http:HttpClient) { }

  getContrat (): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(this.ContratsUrl).pipe(
      tap(_ => console.log('fetched Contrats')),
      catchError(this.handleError<Contrat[]>('getContrats', []))
    );
  }

  createContrat(Contrat: Contrat): Observable<any> {
    return this.http.post<Contrat>(this.ContratsUrl, Contrat, httpOptions).pipe(
      tap((newContrat: Contrat) => console.log(`added Contrat`)),
      catchError(this.handleError<Contrat>('create'))
    );
  }


  updateContrat(Contrat: Contrat,id:any): Observable<any> {
    return this.http.put<Contrat>(this.ContratsUrl+"/"+ id,Contrat, httpOptions).pipe(
      tap((newContrat: Contrat) => console.log(`update Contrat`)),
      catchError(this.handleError<Contrat>('update'))
    );
  }


  deleteContrat(id:any) {
    return this.http.delete(this.ContratsUrl+"/"+id).pipe(
     /// tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<Contrat>('delete'))
    );
  }

  findContratByid(id:any) {
    return this.http.get(this.ContratsUrl+"/"+id).pipe(
     // tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<Contrat>('delete'))
    );
  }
}
