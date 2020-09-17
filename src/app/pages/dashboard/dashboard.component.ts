import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from 'src/app/services/authenticator/authenticator.service';
import { UserModelService } from 'src/app/shared/stateful-model/user-model.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserModelService,
    public authService: AuthenticatorService,
  ) { }

  ngOnInit() {
    if(!this.userService.getUser().jwt){
      this.authService.validateJwt()
    }
  }

}
