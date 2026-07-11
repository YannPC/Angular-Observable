import { Component, Inject, inject } from '@angular/core';
import { DataProviderService } from '../services/data-provider-service';
import { DialogData, ObersableData } from '../obersable-data/obersable-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  title = 'Angular-Observable';

  // constructor(@Inject(MAT_DIALOG_DATA) public info: DialogData) {}

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
