

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlunoModule } from './components/aluno/aluno.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-module.routing';
import { TemplateComponent } from './components/template/template.component';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent

  ],
  imports: [
    AlunoModule,
    BrowserModule,

    AppRoutingModule,
    HttpModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
