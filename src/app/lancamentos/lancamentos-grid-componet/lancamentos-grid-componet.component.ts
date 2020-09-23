import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lancamentos-grid-componet',
  template: `

<h3 class="first">Basic</h3>
<p-table [value]="lancamentos" [paginator]="true" [rows]="2" [responsive]= "true">
    <ng-template pTemplate="header">
        <tr>
            <th>Tipo</th>
            <th>data Vencimeto </th>
            <th>descricao</th>
            <th>data Pagamento</th>
            <th>Pessoa</th>
            <th>Valor</th>
            <th></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-lancamentos>
        <tr>
            <td>{{lancamentos.tipo}}</td>
            <td class="col-ata"   >{{lancamentos.dataVencimeto}}</td>
            <td>{{lancamentos.descricao}}</td>
            <td class="col-data"  >{{lancamentos.dataPagamento}}</td>
            <td>{{lancamentos.pessoa}}</td>
            <td>{{lancamentos.valor}}</td>

            <td style="col-acoes">

                    <a href=""  pButton icon="fa-pencil"  pTooltip="botao editar" iconPos="left" tooltipPosition="top">editar</a>
                    <button pButton icon="fa-trash" pTooltip="botao lixo" tooltipPosition="top">lixo</button>
             </td>

            <!--  para ver o teste
            <ng-template let-lanc="rowData" pTemplate="body">
              <td>                  [style.color]="color:  lanc.tipo === 'DESPESA' ? 'red' : 'blue'"
            <span class="col-valor" [ngStyle]="{color:  lanc.tipo === 'DESPESA' ? 'red' : 'blue'} ">
              {{lancamentos.valor}}</span>
            </td>
          </ng-template>
           </tr>  -->



         </tr>
     </ng-template>

</p-table>

  `,
  styles: []
})
export class LancamentosGridComponetComponent {

  @Input()  lancamentos: any[];

}
