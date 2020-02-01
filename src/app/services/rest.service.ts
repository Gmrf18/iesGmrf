import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Respuesta } from '../interfaces/respuesta.interface';
import { pluck, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
      pluck('resultados'),
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }
}
