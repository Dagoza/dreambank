import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProductComponent } from './request-product.component';

describe('RequestProductComponent', () => {
  let component: RequestProductComponent;
  let fixture: ComponentFixture<RequestProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
