import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:9090/api/products"; 

  constructor(private httpClient:HttpClient) { }


  getProductList():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}
interface GetResponse{  // Unwraps the JSON from Spring Data REST _embedded entry 

  _embedded:{
    products:Product[];
  }


}