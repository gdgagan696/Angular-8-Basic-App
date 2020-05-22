import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { WelcomeComponent } from './product-list/welcome.component';
import { ProductDetailGuard } from './products-list/product-detail.guard';


const routes: Routes = [
    {path:"products", component:ProductListComponent},
    {path:"products/:id",
    canActivate:[ProductDetailGuard],
    component:ProductDetailComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:"",redirectTo:"welcome",pathMatch:"full"},
    {path:"**", redirectTo:"welcome",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
