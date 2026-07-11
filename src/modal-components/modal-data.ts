import { Component, Inject } from '@angular/core';

@Component({
  selector: 'modal-data',
  templateUrl: 'modal-data.html',
  styleUrls: ['modal-data.css'],
})
export class ModalData {
  /* constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

here we used data injection to pass data from the parent component to the modal component.
 The @Inject decorator is used to specify the token (MAT_DIALOG_DATA) that identifies the data being injected.
  This allows us to access the data passed from the parent component within the modal component.

DialogData is an interface that defines the structure of the data being passed to the modal component.
In this case, the DialogData interface has a single property called info of type string. 
This means that when we open the modal dialog, we can pass an object that conforms to this interface, 
and the modal component will be able to access the info property of that object.
*/
  // but in our current configuration we don't need to pass any data from the parent component to the modal component,
  // so we can remove the constructor and the @Inject decorator.
}
