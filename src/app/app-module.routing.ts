import { DashboardAlunoComponent } from './components/aluno/dashboard-aluno/dashboard-aluno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinasAlunoComponent } from './components/aluno/disciplinas-aluno/disciplinas-aluno.component';




const AppRoutes: Routes = [
  { path: 'aluno/disciplinas', component: DisciplinasAlunoComponent},
  { path: 'aluno/dashboard', component: DashboardAlunoComponent},
]

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(AppRoutes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }