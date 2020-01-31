import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-rest-page',
  templateUrl: './rest-page.component.html',
  styleUrls: ['./rest-page.component.scss']
})
export class RestPageComponent implements OnInit {

  constructor(private restService: RestService) { }

  resutados: any[] = [];
  displayedColumns: string[] = [];

  ngOnInit() {
    this.postUser();
  }
  postUser(userId: number = 3) {
    this.restService.postUsuario({usuario_id: userId})
    .subscribe(resp => this.resutados = resp.resultados
    );
  }

}
