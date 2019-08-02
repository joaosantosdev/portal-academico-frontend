import {Injectable} from '@angular/core';
import {ServicoProvider} from '../../../services/servico.provider';
import {Disciplina} from '../../../models/Disciplina';
import {MinhasDisciplinasModel} from '../../../models/aluno/MinhasDisciplinas';
import {Observable} from 'rxjs';

@Injectable()
export class DisciplinaProvider extends ServicoProvider {

  public  minhasDisciplinas(): Observable<any> {
    return this.get('aluno/disciplinas');
  }
}

