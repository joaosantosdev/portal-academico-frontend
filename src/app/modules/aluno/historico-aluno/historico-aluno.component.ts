import {Component, Input, OnInit} from '@angular/core';
import {HistoricoAlunoProvider} from '../services/historico.aluno.provider';
import {Historico} from '../../../models/Historico';

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
  constructor(public historicoAlunoprovider: HistoricoAlunoProvider) {
    this.getHistoricos();
  }

  ngOnInit() {

  }

  public async getHistoricos() {
    const retorno = await this.historicoAlunoprovider.getHistoricos();

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
