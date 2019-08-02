import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisciplinasAlunoComponent} from './disciplinas-aluno/disciplinas-aluno.component';
import {NotasFaltasComponent} from './notas-faltas/notas-faltas.component';
import {AutenticarGuard} from '../../security/autenticar.guard';
import {DashboardAlunoComponent} from './dashboard-aluno/dashboard-aluno.component';
import {PerfilAlunoComponent} from './perfil-aluno/perfil-aluno.component';
import {MateriaisAlunoComponent} from './materiais-aluno/materiais-aluno.component';
import {HistoricoAlunoComponent} from './historico-aluno/historico-aluno.component';
import {CodeTipoUsuario} from '../../models/enums/CodeTipoUsuario';
const alunoRoutes: Routes = [
  {
    path: 'aluno/disciplinas',
    component: DisciplinasAlunoComponent,
    canActivate: [AutenticarGuard],
    data: {codeUsuario: CodeTipoUsuario.C9TVGDNM33C4DHU6}
  },
  {
    path: 'aluno/notas-faltas',
    component: NotasFaltasComponent,
    canActivate: [AutenticarGuard],
    data: {codeUsuario: CodeTipoUsuario.C9TVGDNM33C4DHU6}
  },
  {
    path: 'aluno/dashboard',
    component: DashboardAlunoComponent,
    canActivate: [AutenticarGuard],
    data: {codeUsuario: CodeTipoUsuario.C9TVGDNM33C4DHU6}
  },
  {
    path: 'aluno/perfil',
    component: PerfilAlunoComponent,
    canActivate: [AutenticarGuard],
    data: {codeUsuario: CodeTipoUsuario.C9TVGDNM33C4DHU6}
  },
  {
    path: 'aluno/materiais',
    component: MateriaisAlunoComponent,
    canActivate: [AutenticarGuard],
    data: {codeUsuario: CodeTipoUsuario.C9TVGDNM33C4DHU6}
  },
  {
    path: 'aluno/historico',
    component: HistoricoAlunoComponent,
    canActivate: [AutenticarGuard],
    data: {codeUsuario: CodeTipoUsuario.C9TVGDNM33C4DHU6}
  },
];
@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(alunoRoutes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AlunoModuleRouting {
}
