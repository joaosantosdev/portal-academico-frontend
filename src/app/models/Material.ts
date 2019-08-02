import {Model} from './Model';

export class Material extends Model {
  public nome: string;
  public tipo: string;
  public caminho: string;
  public usuario: string;
  public dataPublicacao: Date;

  model(): this {
    this.dataPublicacao = new Date(this.dataPublicacao);
    return this;
  }

  getDataPublicacao() {
    return this.dataFormatarBR(this.dataPublicacao);
  }

}
