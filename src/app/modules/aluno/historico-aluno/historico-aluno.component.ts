import {Component, Input, OnInit} from '@angular/core';
import {HistoricoAlunoProvider} from '../services/historico.aluno.provider';
import {Historico} from '../../../models/Historico';
import {Retorno} from '../../../models/Retorno';
import {TratarErro} from '../../../security/tratar.error';

@Component({
  selector: 'app-historico-aluno',
  templateUrl: './historico-aluno.component.html',
  styleUrls: ['./historico-aluno.component.scss']
})
export class HistoricoAlunoComponent implements OnInit {
  public historicos: Historico[];
  public historicosAgrupado;
  @Input()
  public isTemplate = true;
  constructor(public historicoAlunoprovider: HistoricoAlunoProvider, public tratarErro: TratarErro) {
    this.getHistoricos();
  }

  ngOnInit() {

  }

  public async getHistoricos() {
 this.historicoAlunoprovider.getHistoricos().subscribe(ret => {
    const retorno = Object.assign(new Retorno(Historico), ret).model();
    console.log(retorno, ret);
    if ( retorno.resposta != null) {
      this.historicos = retorno.resposta;
      this.historicosAgrupado = this.historicosAgrupados(3, this.historicos.length);

    } else {
      this.tratarErro.tratar(retorno.erros);
    }


   }, erro => {
   this.tratarErro.tratar(erro, true);
    });

  }

  public historicosAgrupados(chuck, size) {
    const retorno = [];
    console.log(size);
    for (let i = 0; i < size; i += chuck) {
      retorno.push(this.historicos.slice(i, chuck));
    }
    return retorno;

  }
}
