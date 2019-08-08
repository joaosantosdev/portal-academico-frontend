import {Component, Input, OnInit} from '@angular/core';
import {DadosAluno} from '../../../models/aluno/DadosAluno';
import {PerfilAlunoProvider} from '../services/perfil-aluno.provider';

import {TratarErro} from '../../../security/tratar.error';
import {Retorno} from '../../../models/Retorno';


@Component({
  selector: 'app-perfil-aluno',
  templateUrl: './perfil-aluno.component.html',
  styleUrls: ['./perfil-aluno.component.scss']
})
export class PerfilAlunoComponent implements OnInit {
  public dadosAluno: DadosAluno;
  public senhaMensagem;
  public novaSenha;
  public confirmarSenha;
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
  public alterarSenha() {

    if (this.novaSenha === this.confirmarSenha) {
      if (this.novaSenha.length < 8) {
        this.senhaMensagem = 'Senha tem que ter no mínimo 8 caracteres';
        return;
      }
      this.perfilAlunoProvider.alterarSenha({senha: this.novaSenha}).subscribe(res => {
        if (res.resposta != null) {
          this.senhaMensagem = res.resposta;
          this.novaSenha = null;
          this.confirmarSenha = null;
        } else {
          this.tratarErro.tratar(res.erros);
        }
      }, (erro) => {
        this.tratarErro.tratar(erro, true);
      });
      return;
    }
    this.senhaMensagem = 'As senhas não correspondem';
  }
}
