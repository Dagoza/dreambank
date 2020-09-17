import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestProductComponent } from 'src/app/components/request-product/request-product.component';
import { RequestSuccessComponent } from 'src/app/components/request-success/request-success.component';
import { AuthGuardService } from 'src/app/shared/guards/AuthGuard/auth-guard.service';
import { NewProductComponent } from './new-product.component';


const routes: Routes = [  {
  path: '',
  component: NewProductComponent,
  canActivate: [AuthGuardService],
  children: [
    {
      path: 'request', // child route path
      component: RequestProductComponent, // child route component that the router renders,
    },
    {
      path: 'success', // child route path
      component: RequestSuccessComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProductRoutingModule { }
