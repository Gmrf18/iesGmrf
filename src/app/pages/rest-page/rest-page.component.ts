import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Insumo } from 'src/app/interfaces/insumo.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-rest-page',
  templateUrl: './rest-page.component.html',
  styleUrls: ['./rest-page.component.scss']
})
export class RestPageComponent implements OnInit {

  constructor(private restService: RestService) { }

  resutados$: Observable<Insumo[]>;
  displayedColumns: string[] = [
    'insumo_id',
    'nombre',
    'unidad_medida',
    'contenido_neto',
    'costo_por_unidad',
    'costo_empaque',
    'usuario_id',
  ];

  ngOnInit() {
    this.postUser();
  }
  postUser(userId: number = 3) {
    this.resutados$ = this.restService.postUsuario({usuario_id: userId});
  }
}
