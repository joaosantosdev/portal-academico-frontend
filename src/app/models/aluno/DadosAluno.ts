import {Model} from '../Model';
import {DadosPessoaisAluno} from './DadosPessoaisAluno';
import {DadosAcademicoAluno} from './DadosAcademicoAluno';

export class DadosAluno extends Model {
  public dadosPessoais: DadosPessoaisAluno;
  public dadosAcademico: DadosAcademicoAluno;

  model(): this {
    this.dadosPessoais = Object.assign(new DadosPessoaisAluno(), this.dadosPessoais).model();
    this.dadosAcademico = Object.assign(new DadosAcademicoAluno(), this.dadosAcademico).model();
    return this;

  }
}
