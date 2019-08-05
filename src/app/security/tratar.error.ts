import {Injectable} from '@angular/core';
import {TipoErroEnum} from '../models/enums/TipoErroEnum';
import {Router} from '@angular/router';
import {UrlPadrao} from '../models/enums/UrlPadrao';

@Injectable()
export class TratarErro {
  constructor(public router: Router, public urlPadrao: UrlPadrao) {}

  public tratar(erros, isErroDesconhecido?: boolean, ) {
    if (isErroDesconhecido) {

    } else {
      for (const erro of erros) {
        if (erro.tipoErro === TipoErroEnum.TOKEN_INVALIDO) {
          this.router.navigate(['/login']);
        }
      }
    }
  }
}
