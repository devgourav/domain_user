import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/common/services/account.service';
import { LoginService } from 'src/app/common/services/login.service';
import * as firebase from 'firebase';
import { Account } from '../../common/models/account.model';
import { faArrowRight, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  account: Account;
  faArrowRight = faArrowRight;
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {

    let user = firebase.auth().currentUser;

    this.accountService.getAccountByUid(user.uid).subscribe(response => {
      this.account = response[0];
    })
  }

  logout() {
    this.loginService.logout();
  }


}
