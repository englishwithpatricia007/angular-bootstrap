import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: Certificado[] = [];

  constructor() { }

  adicionarCertificado(certificado: Certificado): void {
    this.certificados.push({...certificado});
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
    console.log('Certificado adicionado:', certificado);
    console.log('Lista de certificados:', this.certificados);
  }
}
