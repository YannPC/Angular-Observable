import { Component, inject } from '@angular/core';
import { DataProviderService } from '../services/data-provider-service';
import { ObersableModalData } from '../obersable-modal-data/obersable-modal-data';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-obersable-main-page',
  imports: [ObersableModalData, NgFor, NgIf],
  templateUrl: './obersable-main-page.html',
  styleUrl: './obersable-main-page.css',
})
export class ObersableMainPage {
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
