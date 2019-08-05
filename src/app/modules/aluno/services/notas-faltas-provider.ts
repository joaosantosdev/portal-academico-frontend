import {Injectable} from '@angular/core';
import {ServicoProvider} from '../../../services/servico.provider';
import {FrequenciaAlunoModel} from '../../../models/aluno/FrequenciaAlunoModel';
import {Nota} from '../../../models/Nota';
import {Observable} from 'rxjs';

@Injectable()
export class NotasFaltasProvider extends ServicoProvider {
  public async getFrequencias() {
    return await this.get<FrequenciaAlunoModel[]>('aluno/frequencia/faltas');
  }

  public  getNotas(): Observable<any> {
    return  this.get('aluno/notas');
  }
}

