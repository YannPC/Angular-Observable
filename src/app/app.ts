import { Component, inject } from '@angular/core';
import { DataProviderService } from '../services/data-provider-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  title = 'Angular-Observable';

  private dataProviderService = inject(DataProviderService);
  data: any[] = [];

  // subscription: Subscription | null = null;

  loading = true;
  // //Observable
  // myObsersable = new Observable((observer) => {
  //   // this data will be emitted after 1 second
  //   setTimeout(() => observer.next('Angular'), 1000);
  //   setTimeout(() => observer.next('React'), 2000);
  //   setTimeout(() => observer.next('Vue'), 3000);
  //   setTimeout(() => observer.next('NodeJs'), 4000);
  //   setTimeout(() => observer.complete(), 5000);
  // });
  GetData() {
    this.loading = false;
    this.dataProviderService.getObersableData();
    this.data = this.dataProviderService.data;
  }

  StopData() {
    this.loading = true;
    this.dataProviderService.stopObsersableData();
  }

  RefreshData() {
    this.loading = true;
    this.dataProviderService.refreshObsersableData();
  }
}
