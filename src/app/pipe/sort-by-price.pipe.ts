import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../service/products.service';

@Pipe({
  name: 'sortByPrice'
})

export class SortByPricePipe implements PipeTransform {

  transform (products: Product[], order: string): Product[] {

    if (!products || !order) {
      return products;
    }
    
    if (order ==='asc') {
      return products.sort((a,b) => a.prix - b.prix);

    } else if (order === 'desc') {
      return products.sort((a, b) => b.prix - a.prix);

    }else {
      return products;
    }
  }

}
