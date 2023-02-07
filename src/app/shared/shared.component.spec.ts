import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './components/my-button/my-button.component';
/* import { MyDialogComponent  } from './components/my-dialog/my-dialog.component'; */



@NgModule({
  declarations: [
    MyButtonComponent,
   /*  MyDialogComponent */
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyButtonComponent
  ]
})
export class SharedModule { }
