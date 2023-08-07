import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from '../shop/shop.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerComponent } from './models/pager/pager/pager.component';
import { PagingHeaderComponent } from './models/paging-header/paging-header/paging-header.component';




@NgModule({
  declarations: [
    PagerComponent,
    PagingHeaderComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports:[
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent
    ]
})
export class SharedModule { }
