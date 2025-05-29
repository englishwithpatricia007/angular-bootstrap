import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  id: string = '6';

}
