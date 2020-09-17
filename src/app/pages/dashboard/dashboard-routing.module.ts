import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/guards/AuthGuard/auth-guard.service';
import { AccountSumaryComponent } from '../account-sumary/account-sumary.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'accountSummary', // child route path
        component: AccountSumaryComponent, // child route component that the router renders,
      },
      {
        path: 'transactions', // child route path
        component: TransactionsComponent
      }
    ],
  },
  {
      path: `newProduct`, loadChildren: () => import('../new-product/new-product.module').then(m => m.NewProductModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
