import { Disciplina } from './../../../models/Disciplina';
import { Component, OnInit } from '@angular/core';
import { DisciplinaProvider } from '../services/disciplina.provider';

@Component({
  selector: 'app-disciplinas-aluno',
  templateUrl: './disciplinas-aluno.component.html',
  styleUrls: ['./disciplinas-aluno.component.scss']
})

export class DisciplinasAlunoComponent implements OnInit {
  public disciplinasAgrupadas;

  
  constructor(public disciplinaService: DisciplinaProvider) { 

    this.getMinhasDisciplinas();
  }

  ngOnInit() {

   
  }

  getStatusDisciplina(status:number):string{
    return Disciplina.statusDisciplina[status];
  }
  getModalidade(modalidade:number):string{
    return Disciplina.modalidades[modalidade];
  }

  async getMinhasDisciplinas(){
    this.disciplinasAgrupadas = await this.disciplinaService.minhasDisciplinas();
  }





}
