import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';


export class  PessoaFiltro {
  tipo: string;
  pesoa: string;
  descricao: string;
  dataVencimeto: Date;
  dataPagamento: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class pessoaService {

  pessoaUrl = 'http://localhost:8080/pessoa';

  constructor(private Htt: HttpClient){ }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const parames = new URLSearchParams();
    const headers = new HttpHeaders();

    headers.append('Authorization','Basic Z2FicmllbHNfMTZAaG90bWFpbC5jb206YWRtaW4==');

    parames.set('page',filtro.pagina.toString());
    parames.set('size',filtro.itensPorPagina.toString());

    if (filtro.descricao){
      params.set('descricao', filtro.descricao);

 }

    if(filtro.dataVencimeto){
      params.set('dataVencimentoDe',moment(filtro.dataVencimeto).format('YYYY-MM-DD'));
    }

    if(filtro.dataPagamento){
      params.set('dataVencimentoAte',moment(filtro.dataPagamento).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.pessoaUrl}?resumo`
    ,{ headers, search: filtro })
    .toPermise()
    .then( reponse => {
      const resposeJson = response.json();
      const pessoa = responseJson.content;

      const resultado = {
        pessoa,
        total: resposeJson.totalEements
      };

      return resultado;

    });

  }

}
