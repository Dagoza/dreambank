import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { fakeBackendProvider } from 'src/app/interceptors/fake-backend';
import { ErrorHandler } from 'src/app/interceptors/error-handler';
import { MODEL_PROVIDER } from 'src/app/shared/stateful-model/model';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MODEL_PROVIDER,
    ErrorHandler,
    fakeBackendProvider
  ]
})
export class LoginModule { }
