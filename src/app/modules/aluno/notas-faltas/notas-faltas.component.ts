import {Disciplina} from './../../../models/Disciplina';
import {NotasFaltasProvider} from './../services/notas-faltas-provider';
import {Component, Input, OnInit} from '@angular/core';
import {FrequenciaAlunoModel} from '../../../models/aluno/FrequenciaAlunoModel';
import {Nota} from '../../../models/Nota';
import {Retorno} from '../../../models/Retorno';
import {TratarErro} from '../../../security/tratar.error';

@Component({
  selector: 'app-notas-faltas',
  templateUrl: './notas-faltas.component.html',
  styleUrls: ['./notas-faltas.component.scss']
})
export class NotasFaltasComponent implements OnInit {
  public frenquencias: FrequenciaAlunoModel[];
  public notas: Nota[];
  @Input()
  public isTemplate = true;

  constructor(public notasFaltasProvider: NotasFaltasProvider, public tratarErro: TratarErro) {
    this.getFaltas();
    this.getNotas();
  }

  ngOnInit() {

  }

  public getNotas() {

    this.notasFaltasProvider.getNotas().subscribe((res) => {
      const retorno = Object.assign(new Retorno(Nota), res).model();
      if (retorno.resposta != null) {
        this.notas = retorno.resposta;
      } else {
        this.tratarErro.tratar(res.erros);
      }
    }, (erro) => {
      this.tratarErro.tratar(erro,true);
    });

  }

  public async getFaltas() {
    const retorno = await this.notasFaltasProvider.getFrequencias();


  }

  public getMeses() {
    if (this.frenquencias != null) {
      if (this.frenquencias[0].semestre === 1) {
        return FrequenciaAlunoModel.PRIMEIRO_SEMESTRE;
      }
      return FrequenciaAlunoModel.SEGUNDO_SEMESTRE;
    }
  }

  public getTotalFaltas(faltas: [number]) {
    let total = 0;
    for (const valor of faltas) {
      total += valor;
    }
    return total;
  }

  public formatarMes(mes: string) {
    return mes.slice(0, 3).toUpperCase();
  }
}
