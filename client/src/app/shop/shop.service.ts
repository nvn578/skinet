import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product';
import { Pagination } from '../shared/models/pagination';
import { Type } from '../shared/models/type';
import { Brand } from '../shared/models/brand';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
baseUrl = 'https://localhost:5001/api/';
Products : Product[] = [];

  constructor(private http:HttpClient) { }

  getProducts(brandId?:number ,typeId?:number ,search?:string){
    let params = new HttpParams;
    if(brandId) params = params.append('brandId',brandId);
    if(typeId) params = params.append('typeId',typeId);
    if(search) params = params.append('search',search);

    return this.http.get<Pagination<Product[]>>(this.baseUrl +'products',{params});
  }

  
  getBrands(){
    return this.http.get<Brand[]>(this.baseUrl +'products/brands');
  }

  
  getTypes(){
    return this.http.get<Type[]>(this.baseUrl +'products/types');
  }
}
