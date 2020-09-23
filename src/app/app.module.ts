import { pessoaService } from './pessoas/pessoa-pesquisa/pessoa.service';
import { LancamentoService } from './lancamentos/lancamento.service';
import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
//   por ter um model controlador ele pode ser inportado
// import { LancamentosPesqisarComponent } from './lancamentos/lancamentos-pesqisar/lancamentos-pesqisar.component';
// import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';

import { NavegacaoModule } from './navegacao/navegacao.module';
import { BotoesModule } from './botoes/botoes.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, LOCALE_ID, ɵDEFAULT_LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import {InputMaskModule} from 'primeng/Components/inputmask/inputmask';
import {DropdownModule} from 'primeng/Components/dropdown/dropdown';
import {SelectButtonModule} from 'primeng/Components/selectbutton/selectbutton';
import {CalendarModule} from 'primeng/Components/calendar/calendar';  // calendar
import { InputTextModule } from 'primeng/Components/inputtext/inputtext'; // quando fazer o biud do ptrojeto fazer so o do componente input
import { ButtonModule } from 'primeng/Components/button/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/Components/table/table';


// inport de mascara e outros do npm

import { CurrencyMaskModule } from "ng2-currency-mask";
import { NovaPessoaComponent } from './pessoas/nova-pessoa/nova-pessoa.component';
import { FormsModule } from '@angular/forms';


// reference the module
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from 'primeng/components/common/api';


// import { TooltipModule} from 'primeng/Components/tooltip/tooltip';
@NgModule({
  declarations: [
    AppComponent,


   // MessagemComponent  // componente de mensagem




  ],
  imports: [

    LancamentosModule, // inporte do model

    PessoasModule,    //  inpote de pessoa

    CoreModule,     // inporte pessonalizado

    BotoesModule, // inportado de botos-grande criado por min como componete

   // HttpClient, // inport para utilizar o http

    HttpClientModule,   // inport do http para consulta


    NavegacaoModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    CurrencyMaskModule

    ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}


