import { MessagemComponent } from './messagem/messagem.component';
import { MenuComponent } from './../navegacao/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MessagemComponent
  ],

  exports: [

    MessagemComponent

  ],

  imports: [
    CommonModule
  ]
})
export class SharedModule { }
