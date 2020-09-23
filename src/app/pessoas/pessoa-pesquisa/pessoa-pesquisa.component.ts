import { Component, OnInit } from '@angular/core';
import { PessoaFiltro, pessoaService } from './pessoa.service';
import { LazyLoadEvent } from 'primeng/components/common/api';


@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {
  totalRegistro = 0;
  filtro = new PessoaFiltro();
  pessoa: any[];

  constructor(private pessoaService: pessoaService){ }

  ngOnInit() {

}

  pesquisar(pagina = 0){

    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
    .then(resultado => {

      this.totalRegistro resultado.total;
      this.pessoa = resultado.pessoa;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
