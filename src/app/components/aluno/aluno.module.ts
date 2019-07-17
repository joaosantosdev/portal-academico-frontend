import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinasAlunoComponent } from './disciplinas-aluno/disciplinas-aluno.component';
import { DashboardAlunoComponent } from './dashboard-aluno/dashboard-aluno.component';

@NgModule({
  declarations: [
    DisciplinasAlunoComponent,
    DashboardAlunoComponent
  ],
  exports:[
    DisciplinasAlunoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlunoModule { }
