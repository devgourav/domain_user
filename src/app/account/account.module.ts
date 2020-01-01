import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UserAccountComponent } from './user-account/user-account.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { UserOrderComponent } from './user-order/user-order.component';


@NgModule({
  declarations: [UserAccountComponent, UserOrderComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class AccountModule { }
