import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from './produit.service';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root' //visiblity tout le projet (composants et modules)
})


export class CategorieService {
  categories: Categorie[] = []
   URL = 'http://localhost:3000/categories';
  constructor(private http: HttpClient, private produitService: ProduitService) { }

  getAllCategories(){
    return this.http.get<Categorie[]> (this.URL);
  }
  getCategoryById(id:number){
    return this.http.get<Categorie>(this.URL+'/'+id);
  }

  addCategorie(categorie:Categorie){
    return this.http.post<Categorie>(this.URL, categorie);
  }

  deleteCategorie(id:number){
    //delete des produit par categorie
    this.produitService.getProduitByCategorie(id).subscribe(data=>{
      data.forEach(p => {this.produitService.deleteProduit(p.id).subscribe()
        console.log("produit supprimé")

      })
    })
    return this.http.delete<void>(this.URL+'/'+id);
    
  }

  // updateCategorie(categorie:Categorie){
  //   return this.http.put<Categorie> (this.URL, categorie);

  // }

  updateCategorie(C:Categorie){
    return this.http.put(this.URL+'/'+C.id, C);
  }
}