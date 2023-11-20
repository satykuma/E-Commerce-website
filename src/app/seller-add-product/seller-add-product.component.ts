import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from 'src/data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage:string|undefined;
  constructor(private product:ProductService){}
  submit(data:Product){
    this.product.products(data).subscribe((result)=>{
      if(result){
        this.addProductMessage="Product is Successfully added"
      }
    });
    setTimeout(() => {
      this.addProductMessage=undefined
    }, 2000);
  }
}
