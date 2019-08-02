import {Injectable} from '@angular/core';

@Injectable()
export class UrlPadrao {

  public urls = new Array({chave: 'C9TVGDNM33C4DHU6', url: 'aluno/dashboard'});


  public getUrl(chave) {
    for (const item of this.urls) {
      if (item.chave === chave) {
        return item.url;
      }
    }

    return null;
  }
}
