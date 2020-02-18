import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Domain } from 'src/app/common/models/domain.model';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FavouriteService } from 'src/app/common/services/favourite.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';
import { AccountService } from 'src/app/common/services/account.service';
import { Account } from '../../common/models/account.model';
import { LoginService } from 'src/app/common/services/login.service';

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrls: ['./domain-card.component.scss']
})
export class DomainCardComponent implements OnInit {

  @Input() domain: Domain;
  @Input() showShortlist: boolean = true;
  @Input() showDelete: boolean;

  faStar = faStar;
  faTrash = faTrash;
  account: Account;
  private snackBar: MatSnackBar;
  isSignedIn: boolean;


  constructor(
    private router: Router,
    private favouriteService: FavouriteService,
    private accountService: AccountService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    let user = firebase.auth().currentUser;

    //console.log("DomainCardComponent->showShortlist", this.showShortlist);

    this.loginService.ifUserLoggedIn().then(response => {
      this.isSignedIn = response;
    });

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

    this.snackBar.open('Added to Favourites', '', {
      duration: 2500
    })
  }

  deleteFavourite(domain: Domain) {

    this.favouriteService.deleteFavourite(domain, this.account);

    this.snackBar.open('Removed from Favourites', '', {
      duration: 2500
    })
  }

}
