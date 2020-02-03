import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Insumo } from 'src/app/interfaces/insumo.interface';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-rest-page',
  templateUrl: './rest-page.component.html',
  styleUrls: ['./rest-page.component.scss']
})
export class RestPageComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort, { static: true }) Sort: MatSort;
  constructor(private restService: RestService) { }

  filter: FormControl = new FormControl();
  filterSubs: Subscription;
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
    this.filterSubs = this.filter.valueChanges
      .pipe(
        debounceTime(800)
      )
      .subscribe((filtro: string) => this.applyFilter(filtro));
  }
  postUser(userId: number = 3) {
    this.dataSourceSubs = this.restService.postUsuario({ usuario_id: userId })
      .subscribe((resultados: any[]) => {
        this.dataSource = new MatTableDataSource(resultados);
        this.dataSource.sort = this.Sort;

      });

  }
  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy() {
    this.dataSourceSubs.unsubscribe();
    this.filterSubs.unsubscribe();
  }
}
