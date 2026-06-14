import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  title = 'Angular-Observable';

  data: any[] = [];

  subscription: Subscription | null = null;

  loading = true;
  //Observable
  myObsersable = new Observable((observer) => {
    // this data will be emitted after 1 second
    setTimeout(() => observer.next('Angular'), 1000);
    setTimeout(() => observer.next('React'), 2000);
    setTimeout(() => observer.next('Vue'), 3000);
    setTimeout(() => observer.next('NodeJs'), 4000);
    setTimeout(() => observer.complete(), 5000);
  });
  GetAsynData() {
    this.loading = false;
    //Observer
    //next, error, complete
    this.subscription = this.myObsersable.subscribe((value: any) => {
      // this.myObsersable.subcrible is the observer and ((value:any)=>{}) is the Handler function
      // value just provided by observable that the observer is subscribed to
      // any because we have data have any as data type
      this.data.push(value);
    });
  }

  StopAsyncData() {
    this.loading = true;
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  RefreshData() {
    this.loading = true;
    this.data = [];
  }
}
