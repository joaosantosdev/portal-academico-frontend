import {ServicoProvider} from '../../../services/servico.provider';
import {Injectable} from '@angular/core';
import {DisciplinaMaterial} from '../../../models/aluno/DisciplinaMaterial';

@Injectable()
export class MaterialAlunoProvider extends ServicoProvider {
    public getDisciplinaMateriais() {
      return this.get<DisciplinaMaterial[]>('aluno/material');
    }
}
