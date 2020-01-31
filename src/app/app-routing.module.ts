import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DomainDetailComponent } from './home/domain-detail/domain-detail.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { PaymentPageComponent } from './payment/payment-page/payment-page.component';
import { LoginComponent } from './shared/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserAccountComponent } from './account/user-account/user-account.component';
import { UserOrderComponent } from './account/user-order/user-order.component';
import { PaymentConfirmComponent } from './payment/payment-confirm/payment-confirm.component';
import { FavouriteDetailsComponent } from './account/favourite-details/favourite-details.component';
import { TermsPageComponent } from './home/terms-page/terms-page.component';
import { PolicyPageComponent } from './home/policy-page/policy-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'domain/:id',
    component: DomainDetailComponent
  },
  {
    path: 'search/:term',
    component: SearchPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'payment/:domain',
    component: PaymentPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment/confirm/:id',
    component: PaymentConfirmComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account',
    component: UserAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order',
    component: UserOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'favourite',
    component: FavouriteDetailsComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsPageComponent
  },
  {
    path: 'privacy-policy',
    component: PolicyPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
