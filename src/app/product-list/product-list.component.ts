import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import {ProductService } from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle:string="Products List";
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  _listFilter:string;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filterProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
  }

  filterProducts:Products[];

  products:Products[];

  constructor(private productService:ProductService) {
    console.log("constructor called");
   }

  ngOnInit() {
    console.log("ngOnInit called");
    this.products=this.productService.getProducts();
    this.filterProducts = this.products;
  }

  toggleImage():void{
    this.showImage=!this.showImage; 
  }

  performFilter(filterBy:string):Products[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:Products)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }
  onRatingClicked(message:string):void{
    this.pageTitle= "Product List: "+message;
  }
 

}
