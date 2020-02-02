import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Insumo } from 'src/app/interfaces/insumo.interface';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rest-page',
  templateUrl: './rest-page.component.html',
  styleUrls: ['./rest-page.component.scss']
})
export class RestPageComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort, { static: true }) Sort: MatSort;
  constructor(private restService: RestService) { }

  dataSource: MatTableDataSource<Insumo[]>;
  dataSourceSubs: Subscription;
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
    this.dataSourceSubs = this.restService.postUsuario({ usuario_id: userId })
      .subscribe((resultados: any[]) => {
        this.dataSource = new MatTableDataSource(resultados) ;
        this.dataSource.sort = this.Sort; });
  }

  ngOnDestroy() {
    this.dataSourceSubs.unsubscribe();
  }
}
