import {Injectable} from '@angular/core';
import {ServicoProvider} from './servico.provider';
import {LoginForm} from '../models/LoginForm';
import {Observable} from 'rxjs';
import {Retorno} from '../models/Retorno';

@Injectable()
export class LoginProvider extends ServicoProvider {
  public  login(loginForm: LoginForm): Observable<any> {
    return this.post('autenticar', loginForm);
  }
}
