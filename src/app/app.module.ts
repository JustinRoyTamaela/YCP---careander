import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { ClientenBestandComponent } from './clienten-bestand/clienten-bestand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DagtakenComponent } from './dagtaken/dagtaken.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientenBestandComponent,
    DashboardComponent,
    DagtakenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
