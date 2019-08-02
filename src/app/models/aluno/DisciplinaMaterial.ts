import {Material} from '../Material';
import {Model} from '../Model';

export class DisciplinaMaterial extends Model {

  public disciplina: string;
  public professor: string;
  public materiais: Material[];

  model(): this {
    this.materiais = this.materiais.map(x => Object.assign(new Material(), x).model());
    return this;
  }

}
