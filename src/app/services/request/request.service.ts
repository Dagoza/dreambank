import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  uri = 'http://localhost:1000/api';
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  requestNewProduct(identity: string, product: string, cellphone: string, monthly: number ) {
    this.http.post(this.uri + '/request/product', { identity, product, cellphone, monthly })
      .subscribe(() => {
        this.router.navigate(['/dashboard/newProduct/success']);
      })
  }
}
