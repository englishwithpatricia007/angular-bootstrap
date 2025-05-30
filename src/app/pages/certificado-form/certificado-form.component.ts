import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})

export class CertificadoFormComponent {

  atividade: string = '';

  certificado: Certificado = {
    nome: '',
    atividades: []
  }

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formInvalido() {
    return this.certificado.atividades.length <= 0 || this.certificado.nome.trim() == '' ;;
  }

  adicionarAtividade() {
      this.certificado.atividades.push(this.atividade);
      this.atividade = '';
  }

  removerAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  gerarCertificado() {
    if (this.formInvalido()) {
      return;
    }
    console.log(this.certificado) ;
  }



}
