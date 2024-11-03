import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  products: Product[] = [];
  topVentes: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.topVentes = this.productsService.getTopVentes();
  }

}
