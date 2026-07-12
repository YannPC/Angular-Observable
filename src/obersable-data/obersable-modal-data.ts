import { Component, Inject, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalData } from '../modal-components/modal-data';

// export interface DialogData {
//   animal: 'panda' | 'lion' | 'tiger';
// }

@Component({
  selector: 'app-obersable-modal-data',
  templateUrl: './obersable-modal-data.html',
  styleUrl: './obersable-modal-data.css',
  standalone: true,
})
export class ObersableModalData {
  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(ModalData, {
      height: '800px',
      width: '600px',

      // data: {
      //   animal: 'panda'
      // }
    });
  }

  /* 
  we created export interface DialogData to define the structure of the data being passed to the modal component.
  In this case, the DialogData interface has a single property called animal, which can be one of three string literal types: 'panda', 'lion', or 'tiger'.
  This means that when we open the modal dialog, we can pass an object that conforms to this interface, 
  and the modal component will be able to access the animal property of that object.

  but in our case we don't need to pass any data from the parent component to the modal component, 
  so we can remove the DialogData interface and the data property in the openDialog() method.
  */
}
