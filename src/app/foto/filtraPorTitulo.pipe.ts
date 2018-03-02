import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filtraPorTitulo'
})
export class FiltraPorTituloPipe implements PipeTransform{
    transform(fotos, valorDigitado){

        const listaAtualizada = fotos.filter(function(foto){
            if (foto.titulo){
                const tituloDaFoto = foto.titulo.toUpperCase()
                const valorDigitadoUpperCase = valorDigitado.toUpperCase()

                return tituloDaFoto.includes(valorDigitadoUpperCase)
            }else {
                return false
            }
        })


        return listaAtualizada
    }
}