import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClientenBestandComponent } from './clienten-bestand/clienten-bestand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VasteDagtakenComponent } from './vaste-dagtaken/vaste-dagtaken.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ReminderService } from './reminder.service';
import { ClientenService } from './clienten.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RemindersComponent,
    MessagesComponent,
    ClientenBestandComponent,
    DashboardComponent,
    VasteDagtakenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule    
  ],
  providers: [ReminderService, ClientenService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
