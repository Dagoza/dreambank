import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-request-success',
  templateUrl: './request-success.component.html',
  styleUrls: ['./request-success.component.scss']
})
export class RequestSuccessComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  toastConfirm(){
    this.snackBar.open(
       'We are studying your order, we will contact you soon'
      ,'', 
      {
       panelClass: ['success-snackbar'],
       duration: 5000
      });

  }

}
