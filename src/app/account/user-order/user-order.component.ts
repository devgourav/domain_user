import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/common/services/order.service';
import * as firebase from 'firebase';
import { Order } from 'src/app/common/models/order.model';
import { faArrowRight, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/common/services/login.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {

  displayedColumns: string[] = ['description', 'amount', 'email', 'creationDate', 'status'];
  dataSource: any;

  orders: Order[] = [];
  faArrowRight = faArrowRight;
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;

  constructor(
    private orderService: OrderService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    let user = firebase.auth().currentUser;

    this.getOrdersByUid(user.uid);
  }

  getOrdersByUid(uid) {
    this.orderService.getOrderByUid(uid).subscribe(response => {
      this.orders = response;
      this.dataSource = response;
      console.log(this.orders);
    })
  }

  logout() {
    this.loginService.logout();
  }



}
