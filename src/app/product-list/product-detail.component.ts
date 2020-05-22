import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from './products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string= "Product Detail";
  product:Products;
 
  constructor(private route:ActivatedRoute,private router:Router) {

   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle+=`: ${id}`;
    this.product = {
      "productId":1,
      "productName":"Garden Cart",
      "productCode":"GDN-0023",
      "releaseDate":"March 18, 2019",
      "description":"Used everywhere",
      "price":32.7512,
      "starRating":4.2,
      "imageUrl":"assets/images/garden-cart.jpg"
    }
  }
  onBack():void{
    this.router.navigate(['/products']);
  }

}
