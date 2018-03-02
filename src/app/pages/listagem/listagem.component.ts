import { Component, OnInit } from '@angular/core';
import { FotoService } from '../../services/foto.service'
import { FotoComponent } from '../../foto/foto.component';


@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title: string = 'Patriots Pictures';
  fotos: Array<FotoComponent> = []
  fotoService: FotoService

  constructor(fotoService: FotoService){// (@Inject(Http) http) - injeção de dependência nas 2 formas
    this.fotoService = fotoService
    fotoService.listar()
    .subscribe(
      jsonFotos => this.fotos = jsonFotos,
      erro => console.log(erro)
    )
   /*var pegaFotos = new XMLHttpRequest()
   pegaFotos.open('GET', 'http://localhost:3000/v1/fotos')
   pegaFotos.send()

   pegaFotos.addEventListener('load', () =>{
    console.log('A requisição chegou', this)
    this.fotos = JSON.parse(pegaFotos.response)
   })*/
  }

removeFoto(foto: FotoComponent){
   
this.fotoService
    .deletar(foto)
    .subscribe(() => {
      console.log(this.fotos)
      const fotosAtualizadas = this.fotos.filter(function(fotoAtual){
        return fotoAtual._id != foto._id
      })

    this.fotos = fotosAtualizadas
  })
}

  ngOnInit() {
  }

}
