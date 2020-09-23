import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-messagem',
  template: `
        <div *ngIf="temErro()" class="ui-messages.ui-messages-error">
            {{text}}
        </div>
`,

styles: []
})
export class MessagemComponent  {
// classe de controle de error
@Input() error: string;
@Input() control: FormControl;
@Input() text: string;

// metodo que vai retorno o error
temErro(): boolean {

  return this.control.hasError(this.error) && this.control.dirty;

}

}
