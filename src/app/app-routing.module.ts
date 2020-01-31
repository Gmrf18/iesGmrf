import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestPageComponent} from './pages/rest-page/rest-page.component';
import { ConvertObjArrComponent} from './pages/convert-obj-arr/convert-obj-arr.component';
import { Componente3Component} from './pages/componente3/componente3.component';

const routes: Routes = [
  {path: 'rest', component: RestPageComponent},
  {path: 'obj-arr', component: ConvertObjArrComponent},
  {path: 'componente3', component: Componente3Component},
  {path: '', redirectTo: 'rest', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
