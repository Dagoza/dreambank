import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions/transactions.service';
import { BankAccount } from 'src/app/shared/models/bank-account';
import { User } from 'src/app/shared/models/user';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';


@Component({
  selector: 'app-account-sumary',
  templateUrl: './account-sumary.component.html',
  styleUrls: ['./account-sumary.component.scss']
})
export class AccountSumaryComponent implements OnInit {

  displayedColumns: string[] = ['icon','Type', 'AccountName', 'Status', 'Currency', 'Balance'];
  user$: Observable<User>;
  subscript: any;
  

  constructor(
    private userService: UserModelService,
    private transactionService: TransactionsService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.user$;
    this.subscript = this.user$.subscribe(
      (user) => {
        if(user.identity!=='') this.transactionService.accountsForId(user.identity);
      }
    )
   
  }

  transaction(account: BankAccount){
    this.transactionService.transactionForAccount(account.id);
  }

  ngOnDestroy() {
    this.subscript.unsubscribe();
   }

}
