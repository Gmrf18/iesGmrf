import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Respuesta } from '../interfaces/respuesta.interface';
import { pluck, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  headers = new HttpHeaders({ 'content-type': 'application/json' });
  URL = environment.URL;
  constructor(private http: HttpClient) {
  }

  postUsuario(body: { usuario_id: number }) {
    return this.http.post<Respuesta>(this.URL, body, { headers: this.headers }).pipe(
      retry(2),
      catchError(this.errorHandler),
      pluck('resultados'),
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error.');
}



}
