import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccount } from 'src/app/shared/models/bank-account';
import { Transaction } from 'src/app/shared/models/transaction';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  uri = 'http://localhost:1000/api';
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserModelService
  ) { }

  accountsForId(identity) {
    this.http.post(this.uri + '/accounts', { identity })
      .subscribe((resp: BankAccount[]) => {
        let user = this.userService.getUser()
        user.accounts = resp;
        this.userService.setUser(user)
      })
  }

  transactionForAccount(idAccount: string) {
    this.http.post(this.uri + '/accounts/transactions', { idAccount })
      .subscribe((resp: Transaction[]) => {
        let user = this.userService.getUser()
        let account = user.accounts.find(element => element.id == idAccount);
        account.transactions = resp;
        this.userService.setUser(user)
        this.router.navigate(['/dashboard/transactions']);
      })
  }

}
