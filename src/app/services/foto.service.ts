import { Http, Headers, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { FotoComponent } from '../foto/foto.component';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class FotoService {
    http: Http
    URL: string = 'http://localhost:3000'
    cabecalho: Headers

    constructor(http: Http){
        this.http = http
        this.cabecalho = new Headers()
        this.cabecalho.append('Content-type', 'application/json')
    }

    atualizar(foto: FotoComponent){
        return this.http.put(`${this.URL}/v1/fotos/${foto._id}`, 
        JSON.stringify(foto), 
        {
            headers: this.cabecalho
        })
    }

    pegaUm(_id: string): Observable<FotoComponent>{
        return this.http.get(`${this.URL}/v1/fotos/${_id}`)
        .map((dados)=> dados.json())
    } 

    listar(): Observable<Array<FotoComponent>> {      
         return this.http.get(`${this.URL}/v1/fotos`)
        .map((dados) => dados.json())//
    }
    
    cadastrar(foto: FotoComponent): Observable<Response>{

        const cabecalho = new Headers()
        cabecalho.append('Content-type', 'application/json')
        
        return this.http.post(`${this.URL}/v1/fotos`, 
            JSON.stringify(foto), 
            {headers: cabecalho}
        )
    }
        
    deletar(foto: FotoComponent): Observable<Response>{
        return this.http.delete(`${this.URL}/v1/fotos/${foto._id}`)

    }
}