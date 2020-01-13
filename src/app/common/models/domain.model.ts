import { Category } from './category.model';
import * as firebase from 'firebase/app';

export interface Domain {
  id?: string;
  name?: string;
  extension?: string;
  keyWords?: string[];
  imageUrl?: string;
  price?: string;
  salePrice?: string;
  status?: string;
  category?: Category[];
  color?: string;
  font?: string;
  visits?: firebase.firestore.FieldValue;
  isSold?: boolean;
  description?: string;
  creationDate?: Date;
  modificationDate?: Date;

}

export interface SearchWord {
  id?: string;
  term: string;
  creationDate?: Date;
}