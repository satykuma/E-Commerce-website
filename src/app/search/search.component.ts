import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { Product } from 'src/data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchResult : undefined | Product[]
  constructor(private activateRoute : ActivatedRoute, private product : ProductService){}

  ngOnInit():void{
    let query = this.activateRoute.snapshot.paramMap.get('query');
    query && this.product.searchProducts(query).subscribe((result)=>{
      this.searchResult = result
    })
  }
}
