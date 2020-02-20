import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Domain } from '../models/domain.model';
import * as sharded from '../../../../sharded-counter';

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
    var domainRef = this.afs.collection<Domain>('domains', ref => ref.where('isSold', '==', false).where('isDeactive', '==', false).orderBy('creationDate', 'desc'));

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

  getFeaturedDomains(): Observable<Domain[]> {
    var domainRef = this.afs.collection<Domain>('domains', ref =>
      ref.where('isFeatured', '==', true).where('isSold', '==', false).where('isDeactive', '==', false)
    );



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

  getNewDomains(): Observable<Domain[]> {
    var domainRef = this.afs.collection<Domain>('domains', ref => ref.where('isSold', '==', false).where('isDeactive', '==', false).orderBy('creationDate', 'desc').limit(8));

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


  getHotDomains(): Observable<Domain[]> {
    var domainRef = this.afs.collection<Domain>('domains', ref => ref.where('isSold', '==', false).where('isSold', '==', false).where('isDeactive', '==', false).orderBy('visits', 'desc').limit(8));

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

    const increment = firebase.firestore.FieldValue.increment(1);

    this.domainDocument.update({ visits: increment });

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
