import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticatorService } from 'src/app/services/authenticator/authenticator.service';
import { User } from 'src/app/shared/models/user';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  user$: Observable<User>;
  constructor(
    private userService: UserModelService,
    private authService: AuthenticatorService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.user$;
  }

  logout(){
    this.authService.logout('login')
  }
}
