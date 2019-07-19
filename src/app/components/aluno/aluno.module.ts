import { NotasFaltasProvider } from './services/notas-faltas-provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinasAlunoComponent } from './disciplinas-aluno/disciplinas-aluno.component';
import { DashboardAlunoComponent } from './dashboard-aluno/dashboard-aluno.component';
import { NotasFaltasComponent } from './notas-faltas/notas-faltas.component';
import { DisciplinaProvider } from './services/disciplina.provider';

@NgModule({
  declarations: [
    DisciplinasAlunoComponent,
    DashboardAlunoComponent,
    NotasFaltasComponent
  ],
  exports:[
    DisciplinasAlunoComponent
  ],
  imports: [
    CommonModule,

  ],
  providers:[
    DisciplinaProvider,
    NotasFaltasProvider
  ]
})
export class AlunoModule { }
