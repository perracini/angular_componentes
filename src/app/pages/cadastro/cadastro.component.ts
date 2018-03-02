import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../foto/foto.component';
import { Headers } from '@angular/http';
import { FotoService } from '../../services/foto.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  {
foto: FotoComponent
formCadastro: FormGroup

constructor(rota: ActivatedRoute, private fotoService: FotoService, private formBuilder: FormBuilder) { //private fotoService pq teve injeção
  this.foto = new FotoComponent
  this.formCadastro = this.formBuilder.group({
    titulo:['', Validators.required],
    url:[],
    descricao:[],

  })

  rota.params.subscribe((parametros) => {
    const idDoItem = parametros.id
    if (idDoItem){
    this.fotoService.pegaUm(idDoItem)
      .subscribe((foto)=> {
        this.foto = foto
      })
    }
  })
}

salvar(event){
    event.preventDefault();
    console.log('Essa é a foto:', this.foto)

    if(this.foto._id){
      console.log(this.foto._id)
      this.fotoService
      .atualizar(this.foto)
      .subscribe(() => {
        console.log("Atualizado")
      })
    } else {
      this.fotoService
      .cadastrar(this.foto)
      .subscribe((resposta) => {
        console.log(resposta)
        this.foto = new FotoComponent()
      })
    }
}
 
  

}
