import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faArrowRight, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrls: ['./payment-confirm.component.scss']
})
export class PaymentConfirmComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  faArrowRight = faArrowRight;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit() {
  }

}
