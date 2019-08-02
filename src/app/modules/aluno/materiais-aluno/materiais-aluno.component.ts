import {Component, Input, OnInit} from '@angular/core';
import {MaterialAlunoProvider} from '../services/material-aluno-provider';
import {DisciplinaMaterial} from '../../../models/aluno/DisciplinaMaterial';

@Component({
  selector: 'app-materiais-aluno',
  templateUrl: './materiais-aluno.component.html',
  styleUrls: ['./materiais-aluno.component.scss']
})
export class MateriaisAlunoComponent implements OnInit {
  public disciplinaMateriais: DisciplinaMaterial[];
  @Input()
  public isTemplate = true;
  constructor(public materialAlunoProvider: MaterialAlunoProvider) {
    this.getDisciplinaMaterias();
  }

  ngOnInit() {

  }

  public async getDisciplinaMaterias() {
    const retorno = await this.materialAlunoProvider.getDisciplinaMateriais();


  }

}
