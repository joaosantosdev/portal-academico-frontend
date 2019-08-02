import {Model} from './Model';
import {CodeTipoUsuario} from './enums/CodeTipoUsuario';

export class TokenModel extends Model {
  public tipo: string;
  public token: string;
  public codeUsuario: CodeTipoUsuario;

  model(): this {
    return super.model();
  }
}
