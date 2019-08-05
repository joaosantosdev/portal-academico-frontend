import {ServicoProvider} from '../../../services/servico.provider';
import {Injectable} from '@angular/core';
import {DisciplinaMaterial} from '../../../models/aluno/DisciplinaMaterial';
import {Observable} from 'rxjs';

@Injectable()
export class MaterialAlunoProvider extends ServicoProvider {
  public getDisciplinaMateriais(): Observable<any> {
    return this.get('aluno/materiais');
  }
}
