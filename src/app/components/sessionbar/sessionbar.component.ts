import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';

@Component({
  selector: 'app-sessionbar',
  templateUrl: './sessionbar.component.html',
  styleUrls: ['./sessionbar.component.scss']
})
export class SessionbarComponent implements OnInit {
  user$: Observable<User>;
  balanceTotal: number;
  constructor(
    private userService: UserModelService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.user$;
    this.user$.subscribe(
      (resp: User) => {
        this.balanceTotal = resp.accounts.reduce( function(accum, account) {
          if(account.status === 'Pending') return accum;
          return accum + account.balance
        }, 0 );
      }
    )
  }

}
