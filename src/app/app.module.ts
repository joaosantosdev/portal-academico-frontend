import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-module.routing';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginProvider} from './services/login.provider';
import {HttpClientModule} from '@angular/common/http';
import {AutenticarGuard} from './security/autenticar.guard';
import {AlunoModule} from './modules/aluno/aluno.module';
import {UrlPadrao} from './models/enums/UrlPadrao';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    AlunoModule,
    BrowserModule,
    RoundProgressModule,
    NgCircleProgressModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginProvider,
    AutenticarGuard,
    UrlPadrao
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
