import {Component, Input, OnInit} from '@angular/core';
import {DadosAluno} from '../../../models/aluno/DadosAluno';
import {PerfilAlunoProvider} from '../services/perfil-aluno.provider';

import {TratarErro} from '../../../security/tratar.error';


@Component({
  selector: 'app-perfil-aluno',
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.scss']
})
export class PerfilAlunoComponent implements OnInit {
  public dadosAluno: DadosAluno;
  @Input()
  public isTemplate = true;

  constructor(public perfilAlunoProvider: PerfilAlunoProvider, public tratarErro: TratarErro) {
    this.getDadosAluno();
  }

  ngOnInit() {

  }

  public getDadosAluno() {
    this.perfilAlunoProvider.dadosAluno().subscribe(res => {
      if (res.resposta != null) {
        this.dadosAluno = Object.assign(new DadosAluno(), res.resposta).model();
      } else {
        this.tratarErro.tratar(res.erros);
      }
    }, (err) => {

    });
  }
}
