import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { products } from 'src/app/shared/mock-data/product-list';
@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  public products: Product[] = []
  public selectedProduct;

  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }

  viewDetail(pro){
    this.selectedProduct = pro;
  }

}
