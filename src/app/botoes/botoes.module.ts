import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoGrandeComponent } from './botao-grande/botao-grande.component';



@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [BotaoGrandeComponent],
  exports: [BotaoGrandeComponent]  // deixando vizivel para importaçãoo em outro
                                    // componet no escopo global do projetos

})
export class BotoesModule { }
