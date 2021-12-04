import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class DemandeLoc{
  id:any;
  firstName:any;
  lastname:any;
  cin:any
  dateDeb:any;
  dateFin:any;
  phone:any;
  localisation:any;

}

@Injectable({
  providedIn: 'root'
})
export class DemandeLocationService {


  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for DemandeLoc consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private DemandeLocsUrl = 'http://localhost:9195/api/demandeslocation';


  constructor(private http:HttpClient) { }

  getDemandeLoc (): Observable<DemandeLoc[]> {
    return this.http.get<DemandeLoc[]>(this.DemandeLocsUrl).pipe(
      tap(_ => console.log('fetched DemandeLocs')),
      catchError(this.handleError<DemandeLoc[]>('getDemandeLocs', []))
    );
  }

  createDemandeLoc(DemandeLoc: DemandeLoc): Observable<any> {
    return this.http.post<DemandeLoc>(this.DemandeLocsUrl, DemandeLoc, httpOptions).pipe(
      tap((newDemandeLoc: DemandeLoc) => console.log(`added DemandeLoc`)),
      catchError(this.handleError<DemandeLoc>('create'))
    );
  }


  updateDemandeLoc(DemandeLoc: DemandeLoc,id:any): Observable<any> {
    return this.http.put<DemandeLoc>(this.DemandeLocsUrl+"/"+ id,DemandeLoc, httpOptions).pipe(
      tap((newDemandeLoc: DemandeLoc) => console.log(`update DemandeLoc`)),
      catchError(this.handleError<DemandeLoc>('update'))
    );
  }


  deleteDemandeLoc(id:any) {
    return this.http.delete(this.DemandeLocsUrl+"/"+id).pipe(
     /// tap((newBien: bienImmobilier) => console.log(`update bien`)),
      catchError(this.handleError<DemandeLoc>('delete'))
    );
  }
}
