import {DisciplinaAluno} from './DisciplinaAluno';
import {Model} from '../Model';

export class MinhasDisciplinasModel extends Model {
  public cursadas: DisciplinaAluno[];
  public trancadas: DisciplinaAluno[];
  public cursando: DisciplinaAluno[];

  public a() {
    return 'a';
  }

  model() {
    this.cursadas = this.cursadas.map(x => Object.assign(new DisciplinaAluno(), x));
    this.cursando = this.cursando.map(x => Object.assign(new DisciplinaAluno(), x));
    this.trancadas = this.trancadas.map(x => Object.assign(new DisciplinaAluno(), x));
    return this;
  }
}
