import {Model} from './Model';

export class Disciplina extends Model {


  public id: number;
  public nome: string;
  public descricao: string;
  public cargaHoraria: string;
  public credito: string;
  public status: number;
  public modalidade: number;
  public dataCriado: Date;
  public dataAtualizado: Date;
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
