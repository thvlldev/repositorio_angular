import { Component } from '@angular/core';
import { Cadastro } from './cadastro/cadastro';
@Component({
 selector: 'app-root',
 imports: [Cadastro],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {
 title = 'sistema-usuarios';
}