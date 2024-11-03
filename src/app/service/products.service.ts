import { Injectable } from "@angular/core";

export interface Product {

    id: number;
    nom: string;
    image: string;
    description: string;
    prix: number;
}

@Injectable({ 
    providedIn: 'root'
})

export class ProductsService {

    private productsServicesFigurines: Product[] = [
        {
            id: 1,
            nom: 'Légionnaires Obélix & Atérix',
            image: '../../assets/asterix-et-obelix-legionnaires.jpg',
            description: 'Personnage de bande dessinée',
            prix: 10
        },

        {
            id: 2,
            nom: 'Atérix & Obélix',
            image: '../../assets/asterix-the-land-of-the-gods.jpg',
            description: 'Personnage de bande dessinée',
            prix: 11
        },

        {
            id: 3,
            nom: 'Jules Césaire',
            image: '../../assets/IMG_1314.JPG',
            description: 'Personnage de bande dessinée',
            prix: 12
        },

        {
            id: 4,
            nom: 'Obélix gifle un soldat',
            image: '../../assets/IMG_1315.JPG',
            description: 'Personnage de bande dessinée',
            prix: 13
        },

        {
            id: 5,
            nom:'Direction Rome',
            image:'../../assets/IMG_1316.JPG',
            description: 'Personnage de bande dessinée',
            prix: 14
        },

        {
            id: 6,
            nom:'Obélix boude',
            image: '../../assets/obelix-oui-je-boude-et-alors.jpg',
            description: 'Personnage de bande dessinée',
            prix: 11
        }
    ];

    getAllProducts(): Product[] {
        return this.productsServicesFigurines;
    }

    getProductById(id: number): Product | undefined {
        return this.productsServicesFigurines.find(product => product.id === id);
    }

    getTopVentes(): Product[] {
        return this.productsServicesFigurines.slice(0, 3);
    }
}
