import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { MODEL_PROVIDER } from 'src/app/shared/stateful-model/model';
import { authInterceptor } from 'src/app/interceptors/auth-interceptor';
import { ErrorHandler } from 'src/app/interceptors/error-handler';
import { fakeBackendProvider } from 'src/app/interceptors/fake-backend';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestProductComponent } from 'src/app/components/request-product/request-product.component';
import { RequestSuccessComponent } from 'src/app/components/request-success/request-success.component';


@NgModule({
  declarations: [
    NewProductComponent,
    RequestProductComponent,
    RequestSuccessComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MODEL_PROVIDER,
    ErrorHandler,
    authInterceptor,
    fakeBackendProvider
  ],
})
export class NewProductModule { }
