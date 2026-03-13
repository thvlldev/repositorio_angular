import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

regraMinCaractere: Boolean = false;
regraMaxCaractere: Boolean = false;
regraLetraMaiuscula: Boolean = true; 
regraCaractereEspecial: Boolean = true;
regraNumLetras: Boolean = false;

validarSenha(senha: string): void {

  const rxMin8 = /^.{8,}$/;

  const rxMax16 = /^.{0,16}$/;

  const rxMaiuscula = /[A-Z]/;

  const rxEspecial = /[^a-zA-Z0-9]/;
  
  const rxNumero = /\d/;

  const rxLetra = /[A-Za-z]/;


  this.regraMinCaractere = rxMin8.test(senha);
  this.regraMaxCaractere = rxMax16.test(senha);
  this.regraLetraMaiuscula = rxMaiuscula.test(senha);
  this.regraCaractereEspecial = rxEspecial.test(senha);
  this.regraNumLetras = rxNumero.test(senha) && rxLetra.test(senha);
  

}



}




