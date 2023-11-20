import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { Product } from 'src/data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productData : undefined | Product
  constructor(private activeRoute:ActivatedRoute , private product : ProductService){}

  ngOnInit():void{
    let productId = this.activeRoute.snapshot.paramMap.get('productId')
    console.log(productId)
    productId && this.product.getProduct(productId).subscribe((result)=>{
      this.productData=result
    })
  }
  count:number=1;
  countProduct(val:string){
    if(val==='dec' && this.count>1){
      this.count--;
    }else if(val==='inc' && this.count<20){
      this.count++;
    }
  }
  addToCart(){
    if(this.productData){
      this.productData.quantity=this.count;
      if(!localStorage.getItem('user')){
        this.product.localAddToCart(this.productData)
      }
      // else{
      //   console.log("else")
      // }
    }
  }
}
