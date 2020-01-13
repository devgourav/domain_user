import { Injectable } from '@angular/core';
import { Domain } from '../models/domain.model';
import { AccountService } from './account.service';

import { Account } from '../../common/models/account.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {


  domains: Domain[];
  account: Account;

  constructor(private accountService: AccountService, private snackBar: MatSnackBar) {
  }


  setLocalFavourite(fav: Domain, acc: Account) {

    if (acc) {

      if (acc.favourites) {
        acc.favourites.push(fav);
      } else {
        acc.favourites = [];
        acc.favourites.push(fav);
      }


      this.accountService.updateAccount(acc).then(() => {
        this.snackBar.open('Added to Favourites', '', {
          duration: 2500
        })
      })
    } else {
      let favDomains: Domain[] = this.getLocalFavourites();
      var index = favDomains.findIndex(favDomain => favDomain.id == fav.id);

      if (index < 0) {
        favDomains.push(fav);
        console.log("setFavourite->", favDomains);
      }
    }
  }

  getLocalFavourites() {
    let favDomains = JSON.parse(localStorage.getItem("domains") || "[]");
    return favDomains;
  }

  getFavourites(uid): Observable<Domain[]> {
    return this.accountService.getAccountByUid(uid).pipe(
      map(accounts => accounts[0].favourites)
    );
  }


  deleteLocalFavourite(domain: Domain) {
    let favDomains = this.getLocalFavourites();
    var index = favDomains.findIndex(favDomain => domain.id == favDomain.id);
    favDomains.splice(index, 1);
    localStorage.setItem("domains", JSON.stringify(favDomains));
  }
}
