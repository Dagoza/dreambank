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
import { RouterTestingModule  } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccountSumaryComponent } from './account-sumary.component';
import { PasswordPipe } from 'src/app/shared/pipe/password.pipe';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';

describe('AccountSumaryComponent', () => {
  let component: AccountSumaryComponent;
  let fixture: ComponentFixture<AccountSumaryComponent>;
  let userService: UserModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [AccountSumaryComponent, PasswordPipe],
     imports: [
       CommonModule,
       HttpClientTestingModule,
       FlexLayoutModule,
       AngularMaterialModule,
       FormsModule, 
       RouterTestingModule.withRoutes([]),
       ReactiveFormsModule
     ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [
        {provide: UserModelService},
       MODEL_PROVIDER,
       ErrorHandler,
       fakeBackendProvider
     ]
     }).compileComponents();
 });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get account for id', () => {
    userService.setUser({
      identity: '',
      avatar: '',
      name: '',
      lastLogin: new Date(),
      accounts: [ {
        id: '99999999999',
        name: "otra",
        icon: "fact_check",
        type: "Checking",
        status: 'Active',
        currency: 'USD',
        balance: 525.1,
        transactions: []
    }, {
      id: '99999999999',
      name: "otra",
      icon: "fact_check",
      type: "Checking",
      status: 'Active',
      currency: 'USD',
      balance: 525.1,
      transactions: []
  }],
      wallets: [],
      notifications: [],
      messages: [],
      jwt: ''
    })
    fixture.detectChanges();
    const tr = fixture.debugElement.queryAll(By.css('tr')).length;
    expect(tr).toEqual(5);
  });

  it('should show 5 row', () => {
    expect(component).toBeTruthy();
  });
});
