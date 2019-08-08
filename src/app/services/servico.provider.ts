import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export abstract class ServicoProvider {


  public endpoint = 'http://localhost:8080/';
  public token = localStorage.getItem('tipoToken') + ' ' + localStorage.getItem('token');
  public optionsToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    })
  };
  public options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  constructor(public http: HttpClient) {
  }

  public post<T>(url: string, body: any, isToken = true): Observable<T> {
    return this.http.post<any>(this.endpoint + url, JSON.stringify(body), this.adicionardToken(isToken));
  }
  public put<T>(url: string, body: any, isToken = true): Observable<T> {
    return this.http.put<any>(this.endpoint + url, JSON.stringify(body), this.adicionardToken(isToken));
  }


  public get<T>(url: string, isToken = true): Observable<any> {
    return this.http.get<any>(this.endpoint + url,  this.adicionardToken(isToken));
  }


  private adicionardToken(isToken: boolean) {
    if (isToken) {


      return this.optionsToken;
    }
    return this.options;

  }
}
