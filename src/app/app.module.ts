

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AlunoModule } from './components/aluno/aluno.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-module.routing';
import { TemplateComponent } from './template/template.component';
import {DisciplinaProvider} from './services/disciplina.provider';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent

  ],
  imports: [
    AlunoModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    DisciplinaProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
