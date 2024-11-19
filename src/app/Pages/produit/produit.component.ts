import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../../service/products.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})

export class ProduitComponent implements OnInit {

  fleche: string = "../../../assets/angle-droit.png";

  product: Product | undefined;

  constructor(
    private titleService: Title 
  ){}

  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  ngOnInit() {
    const productId = Number(this.route.snapshot.params['id']);

    this.product = this.productsService.getProductById(productId);

    if (this.product) {
      this.titleService.setTitle(this.product.nom); // Met à jour le titre de la page avec le nom du produit cliquer
    }
  }

}
