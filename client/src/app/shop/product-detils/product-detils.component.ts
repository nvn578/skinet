import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-detils',
  templateUrl: './product-detils.component.html',
  styleUrls: ['./product-detils.component.scss']
})
export class ProductDetilsComponent implements OnInit {

  product?:Product;

  constructor(private shopService: ShopService, private activatedRoute : ActivatedRoute,private bcService : BreadcrumbService){

    this.bcService.set('@productDetails',' ');
  }
  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) this.shopService.getProduct(+id).subscribe({
      next: product => 
      {
        this.product = product;
        this.bcService.set('@productDetails',product.name)
      },
      error: error => console.log(error)
    }

    )
  }

}
