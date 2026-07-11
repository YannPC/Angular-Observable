import { Component, Inject, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleDialog } from './Modal/dialog-data-example';

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

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}
