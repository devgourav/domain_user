import { Domain } from './domain.model';

export interface Account {
  id?: string;
  uid?: string;
  displayName?: string;
  email?: string;
  phoneNumber?: string;
  favourites?: Domain[];
  creationDate?: Date;
  modificationDate?: Date;
}