import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Domain } from 'src/app/common/models/domain.model';
import { DomainService } from 'src/app/common/services/domain.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/common/services/login.service';
import { FavouriteService } from 'src/app/common/services/favourite.service';
import { HeaderService } from 'src/app/common/services/header.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';
import { Account } from 'src/app/common/models/account.model';
import { AccountService } from 'src/app/common/services/account.service';








@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.scss']
})
export class DomainDetailComponent implements OnInit {
  domain: Domain;
  domainId: string;
  faCheck = faCheck;
  faHeart = faHeart;
  faStar = faStar;
  account: Account;

  randomColor = "#fff";





  constructor(
    private domainService: DomainService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private favouriteService: FavouriteService,
    private snackBar: MatSnackBar,
    private headerService: HeaderService,

  ) { }

  @ViewChild('offerForm', { static: false }) targetEl: ElementRef;

  ngOnInit() {







    this.route.paramMap.subscribe(params => {
      this.domainId = params.get("id");
      if (this.domainId) {
        this.fetchDomainById(this.domainId);


      }

    });


    this.headerService.changeMessage(true);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.accountService.getAccountByUid(user.uid).subscribe(response => {
          this.account = response[0];
        });
      } else {
        // No user is signed in.
      }
    });


  }


  fetchDomainById(id) {
    this.domainService.getDomainById(id).subscribe(response => {
      this.domain = response;
      console.log("fetchDomainById->", this.domain);
    })
  }

  openPaymentPage(id) {

    this.loginService.ifUserLoggedIn().then(response => {
      if (response) {
        this.router.navigateByUrl("/payment/" + id);
        console.log("openPaymentPage->", id);
      } else {
        this.loginService.domainLogin();
      }
    })
  }

  addFavourite(domain: Domain) {

    this.favouriteService.setLocalFavourite(domain, this.account);

    this.snackBar.open('Added to Favourites', '', {
      duration: 2500
    })
  }

  scroll() {
    this.targetEl.nativeElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }


}
