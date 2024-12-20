import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie } from '../model/categorie';
import { CategorieService } from '../core/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {
  newCateg!:Categorie;
  idCateg!: number;
  constructor(private categServ: CategorieService, private R: Router, private  actR: ActivatedRoute){}

  showForm(f: NgForm)
  {
    console.log(f);
  }

  ngOnInit(): void{
    this.actR.queryParamMap.subscribe(data => this.idCateg = Number (data.get('id')));
    if (this.idCateg){
      this.categServ.getCategoryById(this.idCateg).subscribe(
        data => this.newCateg = data
      );
    }
  }

    
    
    addCateg(f: NgForm){
      console.log(f.value);
      this.newCateg = f.value;
      console.log(this.newCateg); 
      
      this.categServ.addCategorie(this.newCateg).subscribe(
        ()=> {
          alert('Categorie ajoutée avec succès');
          this.R.navigate(['/categories']);
        }
      );
      //add dans list categories
    }
    
    updateCateg(addForm: NgForm){
      this.newCateg=addForm.value;
      this.categServ.updateCategorie(this.newCateg).subscribe(
        ()=> {
          alert('Categorie modifiée avec succès');
          this.R.navigate(['/categories']);
        }
      );
    }
}
