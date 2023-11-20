import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from 'src/data-type';
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

  productList : undefined | Product[]
  productDeleteMessage:undefined|string
  icon = faTrash
  edtIcon = faEdit;
  constructor(private product:ProductService){}

  ngOnInit():void{
    this.list()
  }

  list(){
    this.product.productList().subscribe((result)=>{
      console.log(result)
      this.productList=result
    })
  }

  deleteProduct(id:number){
    console.log("id is : ",id)
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productDeleteMessage="Product is deleted !"
        this.list();
      }
    })
    setTimeout(() => {
      this.productDeleteMessage=undefined
    }, 2000);
  }
}
