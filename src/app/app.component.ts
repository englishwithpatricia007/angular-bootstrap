import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

import { ItemCertificadoComponent } from "./_components/item-certificado/item-certificado.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadosComponent } from "./pages/certificados/certificados.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, BaseUiComponent, CertificadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
