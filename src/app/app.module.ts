import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ReminderService } from './reminder.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    RemindersComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule  
  ],
  providers: [ReminderService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
