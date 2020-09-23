import { ToastyService } from 'ng2-toasty';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService

  ) { }

  handle(errorRespose: any) {
    let msg: string;
    // fazendo o tratamento de erro se for uma string
    if(typeof errorRespose === 'string'){
      msg = errorRespose;
    } else {
      msg ='Erro ao processar serviço remoto. Tente novamente.';
      console.log('ocoreu um erro', errorRespose);
    }

    // depois  traatar os erro que vem do servidor

    this.toasty.error(msg);
  }

}
