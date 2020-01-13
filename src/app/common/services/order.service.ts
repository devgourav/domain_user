import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  response: any;
  orderCollection: AngularFirestoreCollection<Order>;
  orders: Observable<Order[]>;
  order: Observable<Order>;
  orderDocument: AngularFirestoreDocument<Order>;

  constructor(private afs: AngularFirestore) { this.orderCollection = this.afs.collection('orders'); }

  getOrders(): Observable<Order[]> {
    var orderRef = this.afs.collection<Order>('orders', ref => ref.orderBy('creationDate', 'desc'));

    return (this.orders = orderRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Order;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    ));
  }

  getOrderById(id: string) {
    console.log("getOrderById", id);
    this.orderDocument = this.afs.doc(`orders/${id}`);
    return this.orderDocument.valueChanges();
  }

  getOrderByUid(uid: string) {
    var orderRef = this.afs.collection<Order>('orders', ref => ref.where('account.uid', '==', uid).orderBy('creationDate', 'desc'));

    return (this.orders = orderRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Order;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    ));
  }


  setOrder(order: Order) {

    const id = this.afs.createId();
    if (!order.id) {
      order.id = id;
    }
    order.creationDate = new Date();
    order.modificationDate = new Date();
    return this.orderCollection.doc(order.id).set(order, { merge: true });
  }

  deleteOrder(order: Order) {
    this.orderDocument = this.afs.doc(`orders/${order.id}`);
    return this.orderDocument.delete();
  }

  updateOrder(order: Order) {
    order.modificationDate = new Date();
    this.orderDocument = this.afs.doc(`orders/${order.id}`);
    return this.orderDocument.update(order);
  }




}
