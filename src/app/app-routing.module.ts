import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategpriesComponent } from './products-categpries/products-categpries.component';
import { DetailsCategoriesComponent } from './details-categories/details-categories.component';
import { AvisComponent } from './avis/avis.component';
import { MedecinComponent } from './medecin/medecin.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { FormProductComponent } from './product/form-product/form-product.component';
import { UserComponent } from './user/user.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AuthentificationGuard } from './authentification.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuard } from './role-guard.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'listCategories', component:ListecategorieComponent,children:[  {path:'details', component:DetailsCategoriesComponent} ]},
  {path:'productsbycategories/:id',component:ProductsCategpriesComponent},
  {path:'avis',component:AvisComponent},
  {path:'medecin',component:MedecinComponent},
  {path:'addCategorie',component:AddCategoriesComponent},
  {path:'addProduct',component:FormProductComponent},
  {path:'addUser',component:UserComponent},
  {path:'login',component:LoginComponentComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthentificationGuard,RoleGuard]},







  // {path:"**", component:NotfoundComponent}
  {path:'chatbot', component:NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
