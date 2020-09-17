import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './interceptors/fake-backend';
import { ErrorHandler } from './interceptors/error-handler';
import { MODEL_PROVIDER } from './shared/stateful-model/model';
import { authInterceptor } from './interceptors/auth-interceptor';
import { RequestProductComponent } from './components/request-product/request-product.component';
import { RequestSuccessComponent } from './components/request-success/request-success.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    MODEL_PROVIDER,
    ErrorHandler,
    authInterceptor,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
