import { Component, OnInit , ViewChild, Output, EventEmitter, Input, OnDestroy} from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { publishers} from 'src/app/shared/mock-data/publisher-list';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit, OnDestroy {

   //@Output() submitForm = new EventEmitter<Product>();


  publisher;
  // @ViewChild('btnCloseModal') btnCloseModal;

  // addForm : FormGroup;

  // constructor() { }

  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.publisher = publishers;
    console.log(this.publisher);
  }

  onSubmit(productForm){
    //console.log(value);
    // this.submitForm.emit(value);
    // this.productService.createProduct(value);
      const product = new Product(productForm.value);
      this.subcription = this.productService.createProduct(product).subscribe(result => console.log(result));
      throw alert(Error('something go wrong'));

  }

  subcription : Subscription;

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
  // closeModal(): void {
  //   this.addForm.reset();
  // }

  // add(): void {
  //   console.log(this.addForm.value);
  //   this.btnCloseModal.nativeElement.click();
  // }

}
