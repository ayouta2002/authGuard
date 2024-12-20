import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HighlitherDirective } from './highlither.directive';
import { FilterPipe } from './filter.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategpriesComponent } from './products-categpries/products-categpries.component';
import { DetailsCategoriesComponent } from './details-categories/details-categories.component';
import { AvisComponent } from './avis/avis.component';
import { MedecinComponent } from './medecin/medecin.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ProductModule } from './product/product.module';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { ShoortListComponent } from './shoort-list/shoort-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HighlitherDirective,
    FilterPipe,
    NotfoundComponent,
    ProductsCategpriesComponent,
    DetailsCategoriesComponent,
    AvisComponent,
    MedecinComponent,
    AddCategoriesComponent,
    UserComponent,
    CardComponent,
    ListecategorieComponent,
    LoginComponentComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
