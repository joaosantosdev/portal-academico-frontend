import {Model} from './Model';
import {TipoErroEnum} from './enums/TipoErroEnum';

export class Retorno<T> extends Model {
  private objeto: any;
  public resposta: T | any;
  public erros: [{
    codigo: number,
    tipoErro: TipoErroEnum;
    mensagemUsuario: string,
    mensagemDesenvolvedor: string
  }];

  constructor(classResposta: any) {
    super();
    this.objeto = classResposta;
  }

  model() {

    if (Array.isArray(this.resposta)) {
      this.resposta = this.resposta.map(x => Object.assign(new this.objeto(), x).model());
      return this;
    }
    if (this.resposta != null) {
      this.resposta = Object.assign(new this.objeto(), this.resposta).model();
    }

    return this;

  }
}
