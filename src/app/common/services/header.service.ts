import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private isSearch = new BehaviorSubject(true);
  currentMessage = this.isSearch.asObservable();

  constructor() { }

  changeMessage(message: boolean) {
    this.isSearch.next(message)
  }

}
