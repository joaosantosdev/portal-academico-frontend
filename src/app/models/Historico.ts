import {Disciplina} from './Disciplina';
import {Model} from './Model';
import {DisciplinaNota} from './DisciplinaNota';

export class Historico extends Model {
  public ano: number;
  public semestre: number;
  public disciplinasNotas: DisciplinaNota[];

  model(): this {
    this.disciplinasNotas = this.disciplinasNotas.map(x => Object.assign(new DisciplinaNota(), x).model());
    return this;

  }
}
