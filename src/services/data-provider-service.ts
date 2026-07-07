import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  data: any[] = [];

  subscription: Subscription | null = null;

  myObsersable = new Observable((observer) => {
    // this data will be emitted after 1 second
    setTimeout(() => observer.next('Angular'), 1000);
    setTimeout(() => observer.next('React'), 2000);
    setTimeout(() => observer.next('Vue'), 3000);
    setTimeout(() => observer.next('NodeJs'), 4000);
    setTimeout(() => observer.complete(), 5000);
  });

  getObersableData() {
    this.subscription = this.myObsersable.subscribe((value: any) => {
      this.data.push(value);
    });
  }

  stopObsersableData() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  refreshObsersableData() {
    this.data = [];
  }
}
