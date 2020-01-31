import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';


import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { DomainCardComponent } from './domain-card/domain-card.component';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
      requireDisplayName: true
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInFlow: 'popup'
};






const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatCardModule,
  MatSliderModule

];

const DependencyModules = [
  ReactiveFormsModule,
  FormsModule
];

const SharedComponents = [
  LoginComponent,
  DomainCardComponent
];



@NgModule({
  entryComponents: [LoginComponent],
  declarations: [SharedComponents],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialComponents,
    DependencyModules,
    FontAwesomeModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  exports: [
    MaterialComponents, DependencyModules, SharedComponents, FontAwesomeModule
  ]
})
export class SharedModule { }
