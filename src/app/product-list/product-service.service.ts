import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = "www.myWebService.com/api/products";

  getProducts():Products[]{ 
    return [
      {
        "productId":1,
        "productName":"Garden Cart",
        "productCode":"GDN-0023",
        "releaseDate":"March 18, 2019",
        "description":"Used everywhere",
        "price":32.7512,
        "starRating":4.2,
        "imageUrl":"assets/images/garden-cart.jpg"
      },
      {
        "productId":2,
        "productName":"Hello",
        "productCode":"GDN-0023",
        "releaseDate":"March 20, 2019",
        "description":"Used everywhere",
        "price":31.75,
        "starRating":4.0,
        "imageUrl":"assets/images/garden-cart.jpg"
      }
    ];
  }
  constructor(private http:HttpClient) { }

  getProductsFromServer():Observable<Products[]>{
    return this.http.get<Products[]>(this.productUrl).pipe(
      tap(data=>console.log('All: '+JSON.stringify(data))),catchError(this.handleError)
    ); 
  }
  
  private handleError(err:HttpErrorResponse){
    let errMsg="";
    if(err.error instanceof ErrorEvent){
      errMsg=`An error occured: ${err.status},error message is: ${err.message}`;
    }
    else{
      errMsg=`Server returned code : ${err.status}, error message is: ${err.message}`;
    }
    console.log(errMsg);
    return throwError(errMsg);
  }
}
