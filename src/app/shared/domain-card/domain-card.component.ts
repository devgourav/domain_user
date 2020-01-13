import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Domain } from 'src/app/common/models/domain.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FavouriteService } from 'src/app/common/services/favourite.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';
import { AccountService } from 'src/app/common/services/account.service';
import { Account } from '../../common/models/account.model';

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrls: ['./domain-card.component.scss']
})
export class DomainCardComponent implements OnInit {

  @Input() domain: Domain;
  faStar = faStar;
  account: Account;


  constructor(
    private router: Router,
    private favouriteService: FavouriteService,
    private accountService: AccountService,

  ) { }

  ngOnInit() {
    let user = firebase.auth().currentUser;

    if (user) {
      this.accountService.getAccountByUid(user.uid).subscribe(response => {
        this.account = response[0];
      });
    }


  }

  openDomainDetail(id) {
    console.log("openDomainDetail->", id);
    this.router.navigateByUrl("/domain/" + id);
  }

  addFavourite(domain: Domain) {
    this.favouriteService.setLocalFavourite(domain, this.account);
  }

}
