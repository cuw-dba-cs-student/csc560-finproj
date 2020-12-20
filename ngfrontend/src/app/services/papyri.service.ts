import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Papyrus } from '../models/papyrus.model'

@Injectable({
  providedIn: 'root'
})

export class PapyriService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000/api';
  URI: string = '';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

    AddPapyrus(payload: Papyrus): Observable<any> {
      console.log('Adding Papyrus');
      console.log(payload);
      let URI = `${this.REST_API}/addPapyrus`;      
      return this.httpClient.post(URI, payload)
        .pipe(
          catchError(this.handleError)
        );
    }

    DeletePapyrus(sign: string): Observable<any> {
      let URI = `${this.REST_API}/deletePapyrus/${sign}`;
      return this.httpClient.delete(URI);
    }

    GetAllPapyri(): Observable<any> {
      let URI = `${this.REST_API}/getAllPapyri`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }

    GetPapyrus(sign: string): Observable<any>  {
      let URI = `${this.REST_API}/getPapyrus/${sign}`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }

    FindByCategory(category: string): Observable<any> {
      let URI = `${this.REST_API}/findByCategory/${category}`;
      return this.httpClient.get(URI)
        .pipe(
          catchError(this.handleError)
        );
    }

    FindByCentury(century: string): Observable<any> {
      let URI = `${this.REST_API}/findByCentury/${century}`;
      return this.httpClient.get(URI)
        .pipe(
          catchError(this.handleError)
        );
    }
    
    UpdatePapyrus(sign: string, payload: Papyrus): Observable<any> {
      let URI = `${this.REST_API}/updatedPapyrus/${sign}`;
      return this.httpClient.patch(URI,payload).pipe(catchError(this.handleError)); 
    }
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
