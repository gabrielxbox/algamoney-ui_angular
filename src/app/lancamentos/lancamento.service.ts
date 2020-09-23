
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
// importando o converso para string de date
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  // FAZER a pesqusa  de data
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';



// ohttp vai fazer a consulta do servidor
  constructor(private http: HttpClient) { }

  // metodo de  por filtro
  // pode ser assim sem criar uma interface
  pesquisar(filtro: LancamentoFiltro): Promise<any> {
     // o parames é para adiciona os paramentro nas url
     const params = new URLSearchParams();
     const headers = new HttpHeaders();

    headers.append('Authorization','Basic Z2FicmllbHNfMTZAaG90bWFpbC5jb206YWRtaW4==');

    params.set('page',filtro.pagina.toString());
    params.set('size',filtro.itensPorPagina.toString());

    if (filtro.descricao){
         params.set('descricao', filtro.descricao);

    }

    if(filtro.dataVencimentoInicio){
      params.set('dataVencimentoDe',moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if(filtro.dataVencimentoFim){
      params.set('dataVencimentoAte',moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`
    ,{ headers, search: filtro })
    .toPromise()
    .then(response => {
      const reponseJson = response.json();
      const lancamentos = responseJson.content;

      // retornado o total de elemento para a tabela

      const resultado = {
        lacamentos,
        total: responseJson.totalElements
      };

      return resultado;

    });


  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization','Basic Z2FicmllbHNfMTZAaG90bWFpbC5jb206YWRtaW4==');
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`, {headers})
    .toPromise()
    .then(() => null);
  }


    /* // ohttp vai fazer a consulta do servidor
  constructor(private http: HttpClient) { }

  // metodo de pesquisar
  pesquisar(): Promise<any> {
    // codigo abaixo que vai ficar a camada de seguranção da aplicação
    const headers = new  HttpHeaders();
    headers.append('Authorization', 'Basic $10$Rs.xd1fzxwa5ikuv6cLDEuc3P/taHyxlMIJD98jKl5PYT5MKtZ3BC ');

    return this.http.get(`${this.lancamentosUrl}?resumo`,{ headers}).toPromise()
    .then(response => response.json().content );


  }


    }
*/

}
