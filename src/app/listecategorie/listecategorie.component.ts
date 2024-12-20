import { Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../model/categorie';
import { Shortlist } from '../model/Shortlist';
import { CardComponent } from '../card/card.component';
import { CategorieService } from '../core/categorie.service';
import { ProduitService } from '../core/produit.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './listecategorie.component.html',
  styleUrls: ['./listecategorie.component.css']
})
export class ListecategorieComponent  {
  constructor(private catServ: CategorieService, private productS: ProduitService){}

 

  categories: Categorie[] = [];
  
  shorList: Shortlist[]=[];
  titre='';

  @ViewChildren( CardComponent) cardList!: QueryList<CardComponent>;
  ngOnInit(){
    this.catServ.getAllCategories().subscribe(
      (data) => this.categories = data,
      (error) => alert ('Liste introuvable'),
      () => alert('completed')
    );
  }
  ngAfterViewInit(){

    //console.log(this.cardList);
    this.cardList.forEach((card)=>{
      let data = this.categories.find(e=>e.id==card.id);
      if (data?.available== false){
        card.btnText='Indisponible';
        card.isAvailable=false;}
      else
        {card.btnText='Voir Produits';
        card.isAvailable=true;}
        
        
      });
 
    
  }

// deleteCategorie(id:number){
//   this.catServ.deleteCategorie(id).subscribe(
//     ()=> console.log("categorie deleted")
//   )
// }

deleteCategorie(id:number){
this.productS.getProduitByCategorie(id).subscribe(
  data =>{
    data.forEach(e=>this.productS.deleteProduit(e.id).subscribe(
      ()=>console.log("product deleted")
    ))
  }
)

this.catServ.deleteCategorie(id).subscribe(
  ()=>console.log("categorie deleted"))
}



showDesc(x:string){
  alert(x);
}

addToShortList(data:any){

  if (this.shorList.find(e=>e.idElement==data.idElement && e.idUser==data.idUser)){
    alert('Element deja dans shortList');
  }
else{
  this.shorList.push({id:1,idUser:data.idUser,idElement:data.idElement,typeElement:'categorie'});}
console.log(this.shorList);

}

}