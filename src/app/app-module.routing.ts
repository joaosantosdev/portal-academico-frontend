import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {PerfilAlunoComponent} from './modules/aluno/perfil-aluno/perfil-aluno.component';
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: PerfilAlunoComponent},
];
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
