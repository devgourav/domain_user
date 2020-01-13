import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchModule } from './search/search.module';
import { PaymentModule } from './payment/payment.module';
import { AccountModule } from './account/account.module';
import { FavouriteService } from './common/services/favourite.service';
import * as firebase from 'firebase/app';

const ProjectModules = [
  HomeModule,
  SearchModule,
  PaymentModule,
  AccountModule
];

const DependencyModules = [
  BrowserModule,
  AppRoutingModule,
  ProjectModules,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFirestoreModule,

];

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    FavouriteService
  ],
  imports: [
    DependencyModules,
    ProjectModules,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
