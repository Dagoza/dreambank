import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BankAccount } from 'src/app/shared/models/bank-account';
import { Transaction } from 'src/app/shared/models/transaction';
import { User } from 'src/app/shared/models/user';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  displayedColumns: string[] = ['Date','Description', 'Currency', 'Value', 'Balance'];
  user$: Observable<User>;
  account: BankAccount;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router: Router,
    private userService: UserModelService
  ) { 
  }

  ngOnInit() {
    this.user$ = this.userService.user$;
    this.user$.subscribe(
      (resp: User) => {        
        this.account = resp.accounts.find( element => element.transactions.length !== 0 );
        if(!this.account) return this.router.navigate(['/dashboard/accountSummary']);
        this.account.transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      })
  }


  getTotalToDate(currentDate: Date){
    return this.account.transactions.reduce(
      function (prev, transaction) {
        if(new Date(transaction.date) <= new Date(currentDate)){
          return  prev + transaction.value;
        }
        return  prev;
    }, 0)
  }

}
