import {ServicoProvider} from '../../../services/servico.provider';
import {Injectable} from '@angular/core';
import {Historico} from '../../../models/Historico';
import {Observable} from 'rxjs';

@Injectable()
export class HistoricoAlunoProvider extends ServicoProvider {
  public getHistoricos(): Observable<any>{
    return this.get('aluno/historico');
  }
}
