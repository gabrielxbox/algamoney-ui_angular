import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacaoModule } from '../navegacao/navegacao.module';
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
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { NovaPessoaComponent } from './nova-pessoa/nova-pessoa.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({

  declarations: [

    PessoaPesquisaComponent,
    NovaPessoaComponent,

  ],

  exports: [
    PessoaPesquisaComponent,
    NovaPessoaComponent

  ],

  imports: [
    CommonModule,

    SharedModule, // metodo costomizado para mensagem
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
  ]
})
export class PessoasModule { }
