import { Component, inject, signal } from '@angular/core';
import { DataProviderService } from '../services/data-provider-service';

@Component({
  selector: 'app-obersable-data',
  imports: [],
  templateUrl: './obersable-data.html',
  styleUrl: './obersable-data.css',
})
export class ObersableData {
  private dataProviderService = inject(DataProviderService);

  protected readonly comments = signal<string>(
    'Angular is a platform for building mobile and desktop web applications.',
  );
}
