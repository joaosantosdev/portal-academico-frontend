import {Model} from './Model';

export class Nota extends Model {
  public disciplina: string;
  public objetiva1: number;
  public objetiva2: number;
  public subjetiva1: number;
  public subjetiva2: number;
  public provaFinal: number;

  public getNP1() {

    return (this.objetiva1 + this.subjetiva1) / 2;
  }

  public getNP2() {
    return (this.objetiva2 + this.subjetiva2) / 2;
  }

  public mediaFinal() {
    return (this.getNP1() + this.getNP2()) / 2;
  }
}
