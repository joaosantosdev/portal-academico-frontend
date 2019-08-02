import {Nota} from './Nota';
import {Disciplina} from './Disciplina';
import {Model} from './Model';

export class DisciplinaNota extends Model {


  public disciplina: Disciplina;
  public nota: Nota;

  model(): this {
    if (this.disciplina != null) {
      this.disciplina = Object.assign(new Disciplina(), this.disciplina).model();
    }
    if (this.nota != null) {
      this.nota = Object.assign(new Nota(), this.nota).model();
    }

    return this;
  }

}
