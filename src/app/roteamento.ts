import {Routes, RouterModule} from '@angular/router'
import {ListagemComponent} from './pages/listagem/listagem.component'
import {CadastroComponent} from './pages/cadastro/cadastro.component'

const rotasApp: Routes = [
    {path: '', component:ListagemComponent},
    {path: 'cadastro', component:CadastroComponent},
    {path: 'cadastro/:id', component:CadastroComponent},
    {path: '**', redirectTo:''}

]
export const roteamento = RouterModule.forRoot(rotasApp)
