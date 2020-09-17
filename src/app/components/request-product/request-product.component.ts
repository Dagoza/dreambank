import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request/request.service';
import { products } from 'src/app/shared/models/products-enum';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';


@Component({
  selector: 'app-request-product',
  templateUrl: './request-product.component.html',
  styleUrls: ['./request-product.component.scss']
})
export class RequestProductComponent implements OnInit {
  public productsEnum = products;
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserModelService,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      product: ['', [Validators.required]],
      cellphone: ['', [Validators.required, Validators.minLength(6)]],
      monthlyIncome: ['', [Validators.required]]
    });
  }

  sendRequest(){
    const user = this.userService.getUser();
    this.requestService.requestNewProduct(
      user.identity,
      this.form.get('product').value,
      this.form.get('cellphone').value,
      this.form.get('monthlyIncome').value
    )
  }
}
