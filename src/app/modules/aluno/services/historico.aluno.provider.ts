import {ServicoProvider} from '../../../services/servico.provider';
import {Injectable} from '@angular/core';
import {Historico} from '../../../models/Historico';

@Injectable()
export class HistoricoAlunoProvider extends ServicoProvider {
  public getHistoricos() {
    return this.get<Historico[]>('aluno/historico');
  }
}
