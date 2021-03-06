import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Domain } from 'src/app/common/models/domain.model';
import { DomainService } from 'src/app/common/services/domain.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/common/services/order.service';
import { Order } from 'src/app/common/models/order.model';
import { AccountService } from 'src/app/common/services/account.service';
import { Account } from '../../common/models/account.model';
import * as firebase from 'firebase';
import { HeaderService } from 'src/app/common/services/header.service';

declare var paypal: any;

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  isPaidFor = false;
  domainId: string;
  domain: Domain;
  order: Order;
  account: Account;

  constructor(
    private domainService: DomainService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private accountService: AccountService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {

    this.fetchAccountByUid();

    this.headerService.changeMessage(false);

    this.route.paramMap.subscribe(params => {
      this.domainId = params.get("domain");
      if (this.domainId) {
        this.fetchDomainById(this.domainId);
      }

    });
  }

  fetchAccountByUid() {
    let user = firebase.auth().currentUser;
    this.accountService.getAccountByUid(user.uid).subscribe(response => {
      this.account = response[0];
    });
  }



  fetchDomainById(id) {
    this.domainService.getDomainById(id).subscribe(response => {
      this.domain = response;

      if (this.domain) {
        this.renderPaypalButton();
      }

    })
  }


  renderPaypalButton() {
    paypal
      .Buttons({
        OnInit: (data, actions) => {
          actions.disable();
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.domain.name + "." + this.domain.extension,
                amount: {
                  currency_code: 'USD',
                  value: this.domain.salePrice
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const paypalOrder = await actions.order.capture();
          this.isPaidFor = true;



          console.log(paypalOrder);


          this.order = {
            paymentId: paypalOrder.id,
            payer_id: paypalOrder.payer.payer_id,
            payer_email: paypalOrder.payer.email_address,
            payer_address: paypalOrder.payer.address.country_code,
            status: paypalOrder.status,
            amount: paypalOrder.purchase_units[0].amount.value,
            currency: paypalOrder.purchase_units[0].amount.currency_code,
            description: paypalOrder.purchase_units[0].description,
            account: this.account
          }

          this.orderService.setOrder(this.order).then(() => {
            console.log("Order Added");
            this.domain.isSold = true;
            this.domainService.updateDomain(this.domain).then(() => {
              console.log("Domain Updated as Sold");
              this.router.navigateByUrl("payment/confirm/" + this.order.paymentId);
            })
          });

        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }


  randomColorGenerator() {
    let color = ['#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#2196f3', '#039be5', '#0097a7', '#26a69a', '#43a047', '#689f38', '#ef6c00', '#ff5722'];
    return color[Math.floor(Math.random() * 13)];
  }

  randomFontGenerator() {
    let fontType = ['BioRhyme', 'Roboto', 'Calistoga', 'Lato', 'Playfair Display'];
    return fontType[Math.floor(Math.random() * 5)];
  }


}
