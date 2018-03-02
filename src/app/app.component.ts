import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>Oi</h1>'
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*title = 'Patriots Pictures';
  fotos: Array<Object>[] = []
    { url:'./assets/img/pats_wallpaper.jpg', titulo:'Patriots Storm' },
    { url:'./assets/img/thumb.jpg', titulo:'Uniform' }*/


/*constructor(http: Http){// (@Inject(Http) http) - injeção de dependência nas 2 formas
    http.get('http://localhost:3000/v1/fotos')
    .map(resposta => resposta.json())
    .subscribe(
      jsonFotos => this.fotos = jsonFotos,
      erro => console.log(erro)
    )
   var pegaFotos = new XMLHttpRequest()
   pegaFotos.open('GET', 'http://localhost:3000/v1/fotos')
   pegaFotos.send()

   pegaFotos.addEventListener('load', () =>{
    console.log('A requisição chegou', this)
    this.fotos = JSON.parse(pegaFotos.response)
   })*/
}


