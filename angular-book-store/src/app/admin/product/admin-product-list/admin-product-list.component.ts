import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { products } from 'src/app/shared/mock-data/product-list';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  public products: Product[] = [];
  public selectedProduct;

  isAdd: Boolean = false;
  isEditting: Boolean = false;

  constructor(private productReceived: ProductService) { }

  ngOnInit(): void {
    this.productReceived.getProducts().subscribe(result => this.products = result);

  }

  deleteProduct(p: Product) {
    const res = confirm('Are you sure you want to delete?');
    if (res) {
      this.productReceived.deleteProduct(p.id).subscribe(result => console.log(result));
    }
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
    this.isEditting = true;
  }

  viewDetail(pro){
    this.selectedProduct = pro;
  }

  handleSubmitForm(value: Product){
    this.products.push(value);
    // this.isAdd = false;
  }

  addBook(){
    this.isAdd = !this.isAdd;
  }


}
