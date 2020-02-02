import { NgModule } from '@angular/core';
// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
