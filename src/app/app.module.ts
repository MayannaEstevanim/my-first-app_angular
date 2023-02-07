import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
/* import { MyButtonComponent } from './shared/components/my-button/my-button.component'; */
import { MyDialogComponent } from './shared/components/my-dialog/my-dialog.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SharedComponent,
    /* MyButtonComponent, */
    MyDialogComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
