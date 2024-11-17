import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../service/products.service';

@Pipe({
  name: 'filterByName'
})

export class FilterByNamePipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if (!products || !searchTerm || searchTerm.length === 0) {
      return products; 
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return products.filter(product => product.nom.toLowerCase().startsWith(lowerCaseSearchTerm));

  }

}
