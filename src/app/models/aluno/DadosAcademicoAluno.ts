import {Model} from '../Model';
import {DisciplinaAluno} from './DisciplinaAluno';

export class DadosAcademicoAluno extends Model {
  public curso: string;
  public ra: number;
  public turno: string;
  public tipoCurso: string;
  public duracaoCurso: string;
  public modalidade: number;

  getModalidade() {
    return DisciplinaAluno.modalidadesString[this.modalidade];
  }
}
