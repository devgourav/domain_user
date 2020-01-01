import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Domain } from '../models/domain.model';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  response: any;
  domainCollection: AngularFirestoreCollection<Domain>;
  domains: Observable<Domain[]>;
  domain: Observable<Domain>;
  domainDocument: AngularFirestoreDocument<Domain>;

  constructor(private afs: AngularFirestore) { this.domainCollection = this.afs.collection('domains'); }

  getDomains(): Observable<Domain[]> {
    var domainRef = this.afs.collection<Domain>('domains', ref => ref.orderBy('creationDate', 'desc'));

    return (this.domains = domainRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Domain;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    ));
  }

  getDomainById(id: string) {
    console.log("getDomainById", id);
    this.domainDocument = this.afs.doc(`domains/${id}`);
    return this.domainDocument.valueChanges();
  }

  setDomain(domain: Domain) {
    const id = this.afs.createId();
    domain.id = id;
    domain.creationDate = new Date();
    domain.modificationDate = new Date();
    return this.domainCollection.doc(id).set(domain);
  }

  deleteDomain(domain: Domain) {
    this.domainDocument = this.afs.doc(`domains/${domain.id}`);
    return this.domainDocument.delete();
  }

  updateDomain(domain: Domain) {
    domain.modificationDate = new Date();
    this.domainDocument = this.afs.doc(`domains/${domain.id}`);
    return this.domainDocument.update(domain);
  }




}
