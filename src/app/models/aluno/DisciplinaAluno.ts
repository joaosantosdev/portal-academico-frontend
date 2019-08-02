import {Model} from '../Model';

export class DisciplinaAluno extends Model {
  public static statusDisciplinaString = new Array('Cursando', 'Cursadas', 'Trancadas', 'Reprovadas', 'Todas');
  public static modalidadesString = new Array('PRESENCIAL', 'SEMI-PRESENCIAL', 'EaD');

  public nome: string;
  public modalidade: number;
  public statusDisciplina: number;
  public professor: {
    nome: string,
    email: string
  };

  public getStatus() {
    return DisciplinaAluno.statusDisciplinaString[this.statusDisciplina - 1];
  }

  getModalidadeTexto(): string {
    console.log(this.modalidade);
    return DisciplinaAluno.modalidadesString[this.modalidade - 1];
  }
}
