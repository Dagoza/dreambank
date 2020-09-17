import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/services/authenticator/authenticator.service';
import { ParticlesConfig } from 'src/app/shared/const/particles-config';

declare let particlesJS: any; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticatorService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', [Validators.pattern('[0-9]+'), Validators.required, Validators.minLength(6)]],
      password: ['', Validators.required]
    });
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  submit(){
    if(this.form.valid){
      this.authService.login(this.form.get('login').value,this.form.get('password').value)
    }
  }

  get f(){
    return this.form.controls;
}

}
