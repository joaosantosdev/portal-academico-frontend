import {Component, Input, OnInit} from '@angular/core';
import {MaterialAlunoProvider} from '../services/material-aluno-provider';
import {DisciplinaMaterial} from '../../../models/aluno/DisciplinaMaterial';
import {Retorno} from '../../../models/Retorno';
import {TratarErro} from '../../../security/tratar.error';


@Component({
  selector: 'app-materiais-aluno',
  templateUrl: './materiais-aluno.component.html',
  styleUrls: ['./materiais-aluno.component.scss']
})
export class MateriaisAlunoComponent implements OnInit {
  public disciplinaMateriais: DisciplinaMaterial[];
  @Input()
  public isTemplate = true;

  constructor(public materialAlunoProvider: MaterialAlunoProvider, public tratarErro: TratarErro) {
    this.getDisciplinaMaterias();
  }

  ngOnInit() {

  }

  public getDisciplinaMaterias() {
    this.materialAlunoProvider.getDisciplinaMateriais().subscribe(retorn => {
      const retorno = Object.assign(new Retorno(DisciplinaMaterial), retorn).model();
      if (retorno.resposta != null) {
        this.disciplinaMateriais = retorno.resposta;
      }else{
        this.tratarErro.tratar(retorn.erros);
      }
    }, err => {
      this.tratarErro.tratar(err,true);
    });

  }

}
