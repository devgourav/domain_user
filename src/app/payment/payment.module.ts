import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';


@NgModule({
  declarations: [PaymentPageComponent, PaymentConfirmComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class PaymentModule { }
