import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from 'src/app/shared/login/login.component';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    public afAuth: AngularFireAuth
  ) { }

  domainLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(response => { });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ifUserLoggedIn() {
    return new Promise<boolean>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

}




