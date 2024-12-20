import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  product: Product[] = []
  URL = 'http://localhost:3000/product';
 constructor(private http: HttpClient) { }
 getAllProduits(){
  return this.http.get<Product[]> (this.URL);
}
getProduitById(id:number){
  return this.http.get<Product>(this.URL+'/'+id);

}

getProduitByCategorie(idCat:number){
  return this.http.get<Product[]>(this.URL+'?categoryId='+idCat);
  
}

addProduit(produit: Product) {
  return this.http.post (this.URL, produit);
}

deleteProduit(id:number){
  return this.http.delete<Product>(this.URL+'/'+id);

}

updateProduit(produit:Product){
  return this.http.put<Product> (this.URL+'/'+produit.id, produit);
} 
}
