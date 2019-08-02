import {Injectable} from '@angular/core';
import {ServicoProvider} from '../../../services/servico.provider';
import {Observable} from 'rxjs';
import {Retorno} from '../../../models/Retorno';

@Injectable()
export class PerfilAlunoProvider extends ServicoProvider {

  public dadosAluno(): Observable<any> {
    return this.get<any>('aluno/dados', true);
  }
}

