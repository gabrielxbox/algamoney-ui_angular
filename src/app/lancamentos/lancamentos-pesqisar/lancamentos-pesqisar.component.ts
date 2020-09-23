import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

import { LancamentoFiltro } from './../lancamento.service';
import { LancamentoService } from './../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesqisar',
  templateUrl: './lancamentos-pesqisar.component.html',
  styleUrls: ['./lancamentos-pesqisar.component.css']
})

export class LancamentosPesqisarComponent implements OnInit {
  totalRegistro = 0;
  filtro = new  LancamentoFiltro();

  lancamentos: any[];

  @ViewChild('tabela') grid;
// pegando o elemento da tabela para quando escluir ele continuar aonde
//ele tiver
constructor(
  private  errorService: ErrorHandlerService,
  private lancamentoService: LancamentoService,
  private toasty: ToastyService,
  private confirmation: ConfirmationService,
  ) {}

// metodo que manda inicializar
ngOnInit() {
//this.pesquisar();
}

pesquisar(pagina = 0) {
  this.filtro.pagina = pagina;

  this.lancamentoService.pesquisar(this.filtro)
  .then(resultado => {
    // atribuição para trazer o total de registro
    this.totalRegistro = resultado.total;
    this.lancamentos = resultado.lancamentos;
  })
  .catch(erro => this.errorService.handle(erro));

}

  aoMudarPagina(event: LazyLoadEvent) {
  // para saber qual que é a paigina da navegação de dados
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any){

    this.confirmation.confirm({
      message: 'Tem certeza que deseja exluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });


  }


  excluir(lancamento: any) {

    this.lancamentoService.excluir(lancamento.codigo)
    .then(() => {
      // a qui ele recarega depois de excluir
      // tambem tem que verifica aonde ta o crig tse tiver no  0 chama o pesqusar
      if(this.grid.first === 0){
        this.pesquisar();
        }else{

          this.grid.first = 0;
        }
        // mensagem
        this.toasty.success('Lançamento exluído com sucesso!');

     })

     .catch(erro => this.errorService.handle(erro));
  }

}







