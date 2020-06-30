import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { publishers} from 'src/app/shared/mock-data/publisher-list';




@Component({
  selector: 'app-admin-reactice-form',
  templateUrl: './admin-reactice-form.component.html',
  styleUrls: ['./admin-reactice-form.component.scss']
})
export class AdminReacticeFormComponent implements OnInit {

  public products: Product[] = [];
  publishers;

  constructor(private frm: FormBuilder, private productReceived: ProductService) { }

  rfContact: FormGroup;

  submit(productForm): void {
    const product = new Product();
    this.productReceived.updateProduct(product).subscribe(result => console.log(result));
  }
  ngOnInit(): void {
    this.publishers = publishers;

    this.rfContact = this.frm.group({
      title: this.frm.control('', Validators.required),
      imgUrl: this.frm.control('', Validators.required),
      author: this.frm.control('', Validators.required),
      finalPrrice: this.frm.control('', Validators.required),
      publisher: this.frm.control('', Validators.required),
      regularPrrice: this.frm.control('', Validators.required),
      publishedDate: this.frm.control('', Validators.required),
      size: this.frm.control('', Validators.required),
      pageCount: this.frm.control('', Validators.required),
      tikiNow: this.frm.group({
            active: this.frm.control(''),
            inActive: this.frm.control('')
          })
    })
  }



}
