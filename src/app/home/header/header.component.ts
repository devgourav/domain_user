import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/common/services/login.service';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  faHamburger = faHamburger;

  @Input() isSearch: boolean;
  @Output() searchTerm = new EventEmitter<string>();
  isSignedIn: boolean;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    private loginService: LoginService
  ) { }

  ngOnInit() {



    this.loginService.ifUserLoggedIn().then(response => {
      this.isSignedIn = response;
      console.log("isSignedIn->", this.isSignedIn);
    })

    this.searchForm = this.fb.group({
      term: ["", Validators.required]
    });


  }

  searchDomain() {
    let term = this.searchForm.get("term").value;
    this.searchTerm.emit(term);
  }

  domainLogin() {
    this.loginService.domainLogin();
  }

  logout() {
    this.loginService.logout();
  }


}
