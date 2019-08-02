import {Model} from '../Model';
import {Endereco} from '../endereco';

export class DadosPessoaisAluno extends Model {
  public nome: string;
  public foto: string;
  public email: string;
  public dataNascimento: Date;
  public cpf: string;
  public rg: string;
  public telefone: string;
  public endereco: Endereco;


  model(): this {
    this.endereco = Object.assign(new Endereco(), this.endereco).model();
    this.dataNascimento = new Date(this.dataNascimento);
    return this;

  }

  public getDataNascimentoBR(): string {
    return this.dataFormatarBR(this.dataNascimento);
  }

}
