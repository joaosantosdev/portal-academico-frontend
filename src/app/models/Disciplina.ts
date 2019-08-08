import {Model} from './Model';

export class Disciplina extends Model {

  public nome: string;
  public statusDisciplina: number;


  public getClassStatusDisciplina() {
    switch (this.statusDisciplina) {
      case 1:
        return 'cursando';
      case 2:
        return 'cursada';
      case 3:
        return 'trancada';
      case 4:
        return 'reprovada';

    }
  }

}
