
import { Injectable } from '@angular/core';
import { ServicoProvider } from './servico.provider';
import { Disciplina } from '../models/Disciplina';


@Injectable()
export class DisciplinaProvider extends ServicoProvider {

  public async minhasDisciplinas() {
    return await this.get<Disciplina>('aluno/disciplinas/aluno');
  }
  


}
 
