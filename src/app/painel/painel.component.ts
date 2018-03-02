import { Component, Input } from '@angular/core';

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',//mesmo nível de diretório
  })
  export class PainelComponent {
    @Input() titulo: string
   
  }