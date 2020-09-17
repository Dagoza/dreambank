import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { fakeBackendProvider } from 'src/app/interceptors/fake-backend';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { MODEL_PROVIDER } from 'src/app/shared/stateful-model/model';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RouterTestingModule  } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

declare let particlesJS: any; 

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        LoginRoutingModule,
        FlexLayoutModule,
        AngularMaterialModule,
        FormsModule, 
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        MODEL_PROVIDER,
        ErrorHandler,
        fakeBackendProvider
      ]
      }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should disabled button form invalid', () => {
    component.form.controls['login'].setValue('')
    component.form.controls['password'].setValue('')
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.btn-block'))
    expect(el.nativeElement.disabled).toBeTruthy();
  });
});
