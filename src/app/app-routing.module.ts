import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProduitComponent } from './pages/produit/produit.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
    /* title: 'Accueil'  */
  },
  {
    path: 'produit/:id',
    component: ProduitComponent,
    /* title: 'Produits' */
  },
  {
    path: 'a-propos',
    component: AboutComponent,
   /*  title: 'À propos' */
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
