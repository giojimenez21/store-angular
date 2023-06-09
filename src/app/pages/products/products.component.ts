import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { tap } from 'rxjs';
import { Product } from './interface/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    this.productSvc
      .getProducts()
      .pipe(tap((products) => this.products = products))
      .subscribe();
  }

  addToCart(product: Product):void {
    console.log(product);
  }
}
