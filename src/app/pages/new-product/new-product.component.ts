import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticlesConfig } from 'src/app/shared/const/particles-config';

declare let particlesJS: any; 

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
