import {Model} from '../Model';

export class FrequenciaAlunoModel extends Model {
  public static PRIMEIRO_SEMESTRE = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
  public static SEGUNDO_SEMESTRE = ['Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  public semestre: number;
  disciplina: string;
  faltas: [number];

}
