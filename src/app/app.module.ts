import 'rxjs/add/operator/map'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import {  DadosFuncionaisModule } from './dados-funcionais/dados-funcionais.module';

import { HttpModule } from '@angular/http';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import {roteamento} from './roteamento'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FotoService } from './services/foto.service'
import 'rxjs/add/operator/map'


//import { FotoComponent } from './foto/foto.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent//, FotoComponent
 
  ],
  imports: [
    BrowserModule, FotoModule, HttpModule, PainelModule, 
    roteamento, FormsModule, ReactiveFormsModule, DadosFuncionaisModule
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]

})
export class AppModule { }
