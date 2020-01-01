import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  response: any;
  categoryCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;
  category: Observable<Category>;
  categoryDocument: AngularFirestoreDocument<Category>;

  constructor(private afs: AngularFirestore) { this.categoryCollection = this.afs.collection('categories'); }

  getCategories(): Observable<Category[]> {
    var categoryRef = this.afs.collection<Category>('categories', ref => ref.orderBy('creationDate', 'desc'));

    return (this.categories = categoryRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Category;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    ));
  }

  getCategoryById(id: string) {
    console.log("getCategoryById", id);
    this.categoryDocument = this.afs.doc(`categories/${id}`);
    return this.categoryDocument.valueChanges();
  }

  setCategory(category: Category) {
    const id = this.afs.createId();
    category.id = id;
    category.creationDate = new Date();
    category.modificationDate = new Date();
    return this.categoryCollection.doc(id).set(category);
  }

  deleteCategory(category: Category) {
    this.categoryDocument = this.afs.doc(`categories/${category.id}`);
    return this.categoryDocument.delete();
  }

  updateCategory(category: Category) {
    category.modificationDate = new Date();
    this.categoryDocument = this.afs.doc(`categories/${category.id}`);
    return this.categoryDocument.update(category);
  }




}
