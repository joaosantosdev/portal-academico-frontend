import {Model} from './Model';

export class Endereco extends Model {

  public estado: string;
  public cidade: string;
  public bairro: string;
  public rua: string;
  public numero: string;
  public complemento: string;

  public getEndereco(): string {
    return this.estado + ', ' + this.cidade + ', ' + this.bairro + ', ' + this.rua + ', ' + this.numero;
  }

}
