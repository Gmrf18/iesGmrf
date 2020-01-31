import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


interface Respuesta {
  mensaje: string;
  codigoOperacion: number;
  mensajeBackend: string;
  codigoOperacionBackend: number;
  resultados: any[];
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  headers = new HttpHeaders({ 'content-type': 'application/json' });
  URL = environment.URL;
  constructor(private http: HttpClient) {
  }


  postUsuario(body: { usuario_id: number }) {
    return this.http.post<Respuesta>(this.URL, body, { headers: this.headers })
  }



}
