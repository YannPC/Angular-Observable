import { Component, inject } from '@angular/core';
import { DataProviderService } from '../services/data-provider-service';
import { ObersableData } from '../obersable-data/obersable-data';
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

  loading = true;
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
    this.data = this.dataProviderService.data;
  }
}
