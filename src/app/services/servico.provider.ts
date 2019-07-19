import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { ENV } from '../environments/environment';

interface RetornoWebService { 
  retorno: any, 
  exception?: { 
    errorCode: number, 
    errorMessage: string 
  } 
};

@Injectable()
export abstract class ServicoProvider {

  constructor(
    public http: Http, 
) {

  }

  public post(url: string, body: any, options?: RequestOptionsArgs) {
    return this.http.post(ENV.webServices.fbService.baseUrl + url, body, options)
  }

  public async get<T>(url: string, options?: RequestOptionsArgs) {
//    options = await this.adicionarCabecalhosAutorizacao(options);
    const response = await this.http.get(ENV.webServices.portalService.baseUrl + url, options).toPromise();
   
    const retornoWebService: RetornoWebService = response.json();  
  
    if(retornoWebService.exception != null){
    //throw new Error(retornoWebService.exception.errorMessage);
    }
;
    return retornoWebService;
  }

//   private async adicionarCabecalhosAutorizacao(options?: RequestOptionsArgs) {
//     options = options || {};
//     if (!('headers' in options)) {
//       options.headers = new Headers();
//     }

//     const token = await this.storage.get(ENV.authentication.accessTokenName);
//     options.headers.append('Content-Type', 'application/json');
//     options.headers.append('Authorization', 'Bearer ' + token);

//     return options;
//   }

}
