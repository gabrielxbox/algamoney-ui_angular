import { ConfirmationService } from 'primeng/components/common/api';
import { pessoaService } from './../pessoas/pessoa-pesquisa/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { ErrorHandlerService } from './error-handler.service';

import { NavbarComponent } from './navbar/navbar.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [

  NavbarComponent
  ],
  imports: [
    CommonModule,
    ToastyModule.forRoot(), // inporte de componete para utilizar mensagem
    ConfirmDialogModule, // sera tipo um modal de confirmação de deletar

  ],

  exports: [

    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule

  ],

  providers: [

    ErrorHandlerService,

    LancamentoService,
    pessoaService,
    // vai ser utilizado para import que requer um serviço como mensagem
    ConfirmationService,
    // fazendo a conferção de decimal para brasileiro
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],

})
export class CoreModule { }
