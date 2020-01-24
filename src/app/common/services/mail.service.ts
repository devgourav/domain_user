import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireFunctions } from '@angular/fire/functions';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private fns: AngularFireFunctions) { }

  sendMail(data: any) {
    const mail = this.fns.httpsCallable('sendMail');

    return mail(data);

  }
}
