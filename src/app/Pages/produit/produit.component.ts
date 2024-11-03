import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})

export class ProduitComponent implements OnInit {

  product: Product | undefined;

  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  ngOnInit() {
    const productId = Number(this.route.snapshot.params['id']);

    this.product = this.productsService.getProductById(productId);
  }

}
