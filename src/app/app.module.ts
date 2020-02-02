import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestPageComponent } from './pages/rest-page/rest-page.component';
import { ConvertObjArrComponent } from './pages/convert-obj-arr/convert-obj-arr.component';
import { Componente3Component } from './pages/componente3/componente3.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';


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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
