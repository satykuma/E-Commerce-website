import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { Product } from 'src/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent {
  productData: undefined | Product;

  constructor(
    private route: ActivatedRoute,
    private product: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.log(data);
        this.productData = data;
      });
  }

  updateProductMessage: string | undefined;
  submit(data: Product) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.updateProductMessage = 'Product Updated Successfully';
      }
    });
    setTimeout(() => {
      this.updateProductMessage = undefined;
      this.router.navigate(['/seller-home'])
    }, 2000);
  }
}
