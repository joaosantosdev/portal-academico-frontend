import {Component, Input, OnInit} from '@angular/core';
import {DadosAluno} from '../../../models/aluno/DadosAluno';
import {PerfilAlunoProvider} from '../services/perfil-aluno.provider';
import {catchError} from 'rxjs/operators';
import {TratarError} from '../../../security/tratar.error';
import {TipoErroEnum} from '../../../models/enums/TipoErroEnum';

@Component({
  selector: 'app-perfil-aluno',
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.scss']
})
export class PerfilAlunoComponent implements OnInit {
  public dadosAluno: DadosAluno;
  @Input()
  public isTemplate = true;

  constructor(public perfilAlunoProvider: PerfilAlunoProvider, public tratarErro: TratarError) {
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
