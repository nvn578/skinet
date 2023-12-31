import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetilsComponent } from './product-detils/product-detils.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes =[
  {path: '', component:ShopComponent},
  {path: ':id', component:ProductDetilsComponent, data:{breadcrumb: {alias: 'productDetails'}}},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ShopRoutingModule { }
