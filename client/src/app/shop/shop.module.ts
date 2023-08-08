import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetilsComponent } from './product-detils/product-detils.component';



@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetilsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[ShopComponent]
})
export class ShopModule { }
