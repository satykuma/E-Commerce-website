import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from 'src/data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularProducts : undefined | Product[]
  trendyProducts :undefined | Product[]

  constructor(private product : ProductService){}

  ngOnInit():void{
    this.product.popularProducts().subscribe((data)=>{
      console.log(data)
      this.popularProducts=data;
    })
    this.product.trendyProducts().subscribe((data)=>{
      console.log(data)
      this.trendyProducts=data;
    })
  }

}
