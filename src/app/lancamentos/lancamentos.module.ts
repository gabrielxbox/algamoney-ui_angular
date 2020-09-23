import { SharedModule } from './../shared/shared.module';
import { NavegacaoModule } from './../navegacao/navegacao.module';
import { BotoesModule } from './../botoes/botoes.module';
import { LancamentosPesqisarComponent } from './lancamentos-pesqisar/lancamentos-pesqisar.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosGridComponetComponent } from './lancamentos-grid-componet/lancamentos-grid-componet.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/Components/inputtext/inputtext';
import { ButtonModule } from 'primeng/Components/button/button';
import { TableModule } from 'primeng/Components/table/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/Components/calendar/calendar';
import { SelectButtonModule } from 'primeng/Components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/Components/dropdown/dropdown';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/Components/inputmask/inputmask';
import { CurrencyMaskModule } from 'ng2-currency-mask';





@NgModule({
  imports: [
    CommonModule,


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
    CurrencyMaskModule,

    SharedModule // metodo costomizado para mensagem



  ],
   declarations: [  //  recebendo dos model
     LancamentoCadastroComponent,
     LancamentosPesqisarComponent,
     LancamentosGridComponetComponent
   ],

   exports: [      //    enviando para os outros model
    LancamentoCadastroComponent,
    LancamentosPesqisarComponent,

   ],
})
export class LancamentosModule { }
