import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  fleche: string = "../../../assets/angle-droit.png";

  products: Product[] = [];
  topVentes: Product[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.topVentes = this.productsService.getTopVentes();
  }

  onSortChange(event: any) {
    this.sortOrder = event.target.value;
  }

}
