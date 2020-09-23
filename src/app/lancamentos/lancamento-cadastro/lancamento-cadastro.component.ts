import { Component, OnInit } from '@angular/core';

import { PessoaService } from './../../pessoas/pessoa-pesquisa/pessoa.service';
import { CategoriaServiceService } from './../../categorias/categoria-service.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
{ label: 'Receita', value: 'RECEITA'},
{ label: 'Despesa', value: 'DESPESA'},
  ] ;

  categoria = [];

  pessoa = [];

  constructor(
     private categoriaService: CategoriaServiceService,
     private pessoaService: PessoaService,
     private ErrorHandler: ErrorHandlerService,

  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoa();
  }

  carregarCategorias(){
    return this.categoriaService.listaTodos()
    .then(this.categoria = categoria.map(c =>{
      return {label: c.nome , value: c.codigo};
  });
  .catch(error =this.ErrorHandler.handle(erro));
});

  carregarPessoa(){
    return this.pessoaService.pesquisar()
    .this(this.pessoa = = pessoa.map(p =>{

      return {label: p.nome, value: c.id};

    });
    .catch(error =this.ErrorHandler.handle(erro));
    })



}



