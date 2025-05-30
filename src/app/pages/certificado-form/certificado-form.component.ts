import { Component, ViewChild } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { v4 as uuidv4 } from 'uuid'; // Certifique-se de instalar a biblioteca uuid

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})

export class CertificadoFormComponent {


  constructor(private certificadoService : CertificadoService) { }

  @ViewChild('form') form!: NgForm;

  atividade: string = '';

  certificado: Certificado = {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: new Date().toString(),
  }

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formInvalido() {
    return this.certificado.atividades.length <= 0 || this.certificado.nome.trim() == '' ;;
  }

  adicionarAtividade() {
    if (this.atividade.length == 0) {
      return;
    }
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
    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4(); // Certifique-se de importar a biblioteca uuid
    this.certificadoService.adicionarCertificado(this.certificado);
    this.certificado = this.estadoInicial();
    this.form.resetForm();
  }

  dataAtual(){
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }


  estadoInicial() : Certificado{
    return {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: new Date().toString(),
    }
  }

}
