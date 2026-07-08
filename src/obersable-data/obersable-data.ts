import { Component, Inject, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-obersable-data',
  templateUrl: './obersable-data.html',
  styleUrl: './obersable-data.css',
  standalone: true,
})
export class ObersableData {
  private dialog = inject(MatDialog);

  data = signal<DialogData>({ animal: 'panda' });

  openDialog() {
    this.dialog.open(ObersableData, {
      data: {
        animal: 'panda',
      },
    });
  }
}
