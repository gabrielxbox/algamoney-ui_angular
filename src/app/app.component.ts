import { Component, OnInit } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {

  constructor(private toastyConfig: ToastyConfig){
  // configurando para o bootstrap
    this.toastyConfig.theme = 'bootstrap';
  }

}
