import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSumaryComponent } from './account-sumary.component';

describe('AccountSumaryComponent', () => {
  let component: AccountSumaryComponent;
  let fixture: ComponentFixture<AccountSumaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSumaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
