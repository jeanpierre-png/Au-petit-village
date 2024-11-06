import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  twitter: string = "../../../assets/twitter.png";
  instagram: string = "../../../assets/instagram.png";
  copyright: string = "../../../assets/droits-dauteur.png"
}
