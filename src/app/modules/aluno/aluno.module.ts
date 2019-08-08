import {NotasFaltasProvider} from './services/notas-faltas-provider';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisciplinasAlunoComponent} from './disciplinas-aluno/disciplinas-aluno.component';
import {DashboardAlunoComponent} from './dashboard-aluno/dashboard-aluno.component';
import {NotasFaltasComponent} from './notas-faltas/notas-faltas.component';
import {DisciplinaProvider} from './services/disciplina.provider';
import {PerfilAlunoComponent} from './perfil-aluno/perfil-aluno.component';
import {DadosPessoaisAlunoComponent} from './sub-components/dados-pessoais-aluno/dados-pessoais-aluno.component';
import {DadosAcademicoAlunoComponent} from './sub-components/dados-academico-aluno/dados-academico-aluno.component';
import {MateriaisAlunoComponent} from './materiais-aluno/materiais-aluno.component';
import {PerfilAlunoProvider} from './services/perfil-aluno.provider';
import {HistoricoAlunoComponent} from './historico-aluno/historico-aluno.component';
import {MaterialAlunoProvider} from './services/material-aluno-provider';
import {HistoricoAlunoProvider} from './services/historico.aluno.provider';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {AlunoModuleRouting} from './aluno-module.routing';
import { TemplateAlunoComponent } from './template-aluno/template-aluno.component';
import {TratarErro} from '../../security/tratar.error';
import {FormsModule} from '@angular/forms';
import { HorarioAlunoComponent } from './horario-aluno/horario-aluno.component';

@NgModule({
  declarations: [
    DisciplinasAlunoComponent,
    DashboardAlunoComponent,
    NotasFaltasComponent,
    PerfilAlunoComponent,
    DadosPessoaisAlunoComponent,
    DadosAcademicoAlunoComponent,
    MateriaisAlunoComponent,
    HistoricoAlunoComponent,
    TemplateAlunoComponent,
    HorarioAlunoComponent
  ],
  exports: [DisciplinasAlunoComponent, TemplateAlunoComponent],
  imports: [
    CommonModule,
    NgCircleProgressModule,
    RoundProgressModule,
    AlunoModuleRouting,
    FormsModule,

  ],
  providers: [
    DisciplinaProvider,
    NotasFaltasProvider,
    PerfilAlunoProvider,
    MaterialAlunoProvider,
    HistoricoAlunoProvider,
    TratarErro
  ]
})
export class AlunoModule {
}
