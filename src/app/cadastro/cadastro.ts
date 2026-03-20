import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  private enderecoService = inject(EnderecoService);

  nomeRegex = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/;

  passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form = new FormGroup({
  nome: new FormControl('', [Validators.required, Validators.pattern(this.nomeRegex)]), //campo nome
  email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)] ), //campo email
  senha: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]), //campo senha
  cep: new FormControl(''),
  logradouro: new FormControl({value: '', disabled: true})

});


onSubmit() {

  if(this.form.valid)
    console.log("Formulário válido: ", this.form.value);
  else
    console.log("Formulário inválido", this.form.value);

}

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


get buscarCep(){

  const cep = this.form.get('cep')?.value ?? '';
  this.enderecoService.getEndereco(cep).subscribe(endereco => {
    this.form.get('logradouro')?.setValue(endereco.logradouro);
  });

  return true;
}
}




