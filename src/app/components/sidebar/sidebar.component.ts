import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  options = {
    accounts:[
      {
       name: 'Account Summary',
       link: '/dashboard/accountSummary'
      }, 
      {
        name: 'Account',
        link: '/dashboard/account'
       }],
    transactions:[
      {
        name: 'Inquire Transactions',
        link: '/dashboard/inquireTransactions'
       }, 
       {
         name: 'Fund Transfer',
         link: '/dashboard/fundTransfer'
        },
        {
          name: 'Bill Payments',
          link: '/dashboard/billPayments'
         }],
    services: [
      {
        name: 'Account Statements',
        link: '/dashboard/accountStatements'
       }, 
       {
         name: 'Enroll New Account',
         link: '/dashboard/newAccount'
        },
        {
          name: 'Enroll a Credit Card',
          link: '/dashboard/creditCard'
         },
         {
          name: 'Card Replacement',
          link: '/dashboard/cardReplacement'
         }, 
         {
           name: 'New Checkbook',
           link: '/dashboard/newCheckbook'
          }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
