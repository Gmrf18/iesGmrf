import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestPageComponent } from './pages/rest-page/rest-page.component';
import { ConvertObjArrComponent } from './pages/convert-obj-arr/convert-obj-arr.component';
import { Componente3Component } from './pages/componente3/componente3.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestPageComponent,
    ConvertObjArrComponent,
    Componente3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
