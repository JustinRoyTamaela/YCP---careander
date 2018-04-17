import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { ClientenBestandComponent } from './clienten-bestand/clienten-bestand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DienstenComponent } from './diensten/diensten.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientenBestandComponent,
    DashboardComponent,
    DienstenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
