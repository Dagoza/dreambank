import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from 'src/app/interceptors/auth-interceptor';
import { fakeBackendProvider } from 'src/app/interceptors/fake-backend';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { SessionbarComponent } from 'src/app/components/sessionbar/sessionbar.component';
import { AccountSumaryComponent } from '../account-sumary/account-sumary.component';
import { MenubarComponent } from 'src/app/components/menubar/menubar.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MODEL_PROVIDER } from 'src/app/shared/stateful-model/model';
import { PasswordPipe } from 'src/app/shared/pipe/password.pipe';
import { ErrorHandler } from 'src/app/interceptors/error-handler';
import { TransactionsComponent } from '../transactions/transactions.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    MenubarComponent,
    SessionbarComponent,
    AccountSumaryComponent,
    TransactionsComponent,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule,
    DashboardRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MODEL_PROVIDER,
    ErrorHandler,
    authInterceptor,
    fakeBackendProvider
  ],
})
export class DashboardModule { }
