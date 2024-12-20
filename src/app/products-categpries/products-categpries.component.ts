import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-categpries',
  templateUrl: './products-categpries.component.html',
  styleUrls: ['./products-categpries.component.css']
})
export class ProductsCategpriesComponent {
id!:Number;
categorie!:String;

listProducts: Product[] = [];

productsbycategories: Product[] = []; 
constructor(private actR:ActivatedRoute,private ProductServ: Product){}


// ngOnInit(){
//   this.ProductServ.getAllProduits().subscribe(
//     (data) => this.categories = data,
//     (error) => alert ('Liste introuvable'),
//     () => alert('completed')
//   );
// }

// ngOnInit(){ 
//   this.id = Number(this.actR.snapshot.params['id']);
//   this.productsbycategories = this.listProducts.filter(p=>p.categoryId == this.id);
//   //console.log(this.productsByCategory.length);//

// this.id=Number(this.actR.snapshot.paramMap.get('id'));
// Observable;

// this.actR.paramMap.subscribe(params => this.id=Number(params.get('id')))


// this.categorie=String(this.actR.snapshot.queryParamMap.get('name'));
// this.actR.queryParamMap.subscribe(params => this.categorie=String(params.get('name')))
// }

}
