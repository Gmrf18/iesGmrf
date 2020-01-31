import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-rest-page',
  templateUrl: './rest-page.component.html',
  styleUrls: ['./rest-page.component.scss']
})
export class RestPageComponent implements OnInit {

  constructor(private restService: RestService) { }

  resutados: any[] = [{usuario_id: 25656, name: 'Gerardo Manuel Reyes', age: 29}];
  displayedColumns: string[] = ['usuario_id', 'name' , 'age'];

  ngOnInit() {
   // this.postUser(); // Comentado ya que resuñtados está vacio
  }
  postUser(userId: number = 3) {
    this.restService.postUsuario({usuario_id: userId})
    .subscribe(resp => this.resutados = resp.resultados
    );
  }
}
