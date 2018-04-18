import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClientenBestandComponent } from './clienten-bestand/clienten-bestand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VasteDagtakenComponent } from './vaste-dagtaken/vaste-dagtaken.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ReminderService } from './reminder.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientenBestandComponent,
    DashboardComponent,
    VasteDagtakenComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ReminderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
