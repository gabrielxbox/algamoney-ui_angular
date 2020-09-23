import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-grande',
  templateUrl: './botao-grande.component.html',
  styleUrls: ['./botao-grande.component.css']
})
export class BotaoGrandeComponent implements OnInit {

  // vai ser usado para o nome do botao
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
