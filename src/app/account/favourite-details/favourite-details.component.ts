import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/common/services/favourite.service';
import { Domain } from 'src/app/common/models/domain.model';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-favourite-details',
  templateUrl: './favourite-details.component.html',
  styleUrls: ['./favourite-details.component.scss']
})
export class FavouriteDetailsComponent implements OnInit {
  favDomains: Domain[] = [];


  constructor(
    private favouriteService: FavouriteService
  ) { }

  ngOnInit() {
    this.getFavourites();
  }

  getFavourites() {

    let user = firebase.auth().currentUser;


    if (user) {
      this.favouriteService.getFavourites(user.uid).subscribe(response => {
        this.favDomains = response;
      });
    } else {
      this.favDomains = this.favouriteService.getLocalFavourites();
    }



    console.log("favDomains", this.favDomains);
  }




}
