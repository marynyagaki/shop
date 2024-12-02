import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaleComponent } from './sale/sale.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:" ",
    pathMatch:"full",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"sale",
    component:SaleComponent
  },
  {
    path:"cart",
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
