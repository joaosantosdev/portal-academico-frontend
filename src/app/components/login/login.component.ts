import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../../models/LoginForm';
import {LoginProvider} from '../../services/login.provider';
import {Retorno} from '../../models/Retorno';
import {TokenModel} from '../../models/token';
import {TipoErroEnum} from '../../models/enums/TipoErroEnum';
import {Router} from '@angular/router';
import {UrlPadrao} from '../../models/enums/UrlPadrao';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new LoginForm();
  public isNotAutenticado = false;

  constructor(public loginProvider: LoginProvider, public router: Router, public urlPadrao: UrlPadrao) {
  }

  ngOnInit() {
  }

  public entrar() {
    this.loginProvider.login(this.loginForm).subscribe(res => {
        const retorno = Object.assign(new Retorno<TokenModel>(TokenModel), res).model();
        this.verificarResposta(retorno);
        console.log(res);
      }, (err) => {

      }
    );
  }

  private verificarResposta(retorno) {
    if (retorno.resposta != null) {
      this.isNotAutenticado = false;
      localStorage.setItem('token', retorno.resposta.token);
      localStorage.setItem('tipoToken', retorno.resposta.tipo);
      localStorage.setItem('codeUsuario', retorno.resposta.codeUsuario);

      const url = this.urlPadrao.getUrl(retorno.resposta.codeUsuario);
      console.log(url)
      if (url != null) {
        this.router.navigate([url]);
      }

    } else {
      for (const erro of retorno.erros) {
        if (erro.tipoErro === TipoErroEnum.ERRO_AUTENTICACAO) {
          this.isNotAutenticado = true;
        }
      }
    }
  }
}
