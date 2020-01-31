import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { DomainDetailComponent } from './domain-detail/domain-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from '../shared/login/login.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';


@NgModule({
  entryComponents: [LoginComponent],
  declarations: [HomePageComponent, DomainDetailComponent, FooterComponent, HeaderComponent, OfferFormComponent, TermsPageComponent, PolicyPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    FooterComponent, HeaderComponent
  ]
})
export class HomeModule { }
