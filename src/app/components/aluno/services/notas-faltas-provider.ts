import { Injectable } from '@angular/core';
import { ServicoProvider } from '../../../services/servico.provider';
@Injectable()
export class NotasFaltasProvider extends ServicoProvider {
  public async getFaltas() {
    return await this.get('aluno/frequencia/faltas');
  }
}
 
