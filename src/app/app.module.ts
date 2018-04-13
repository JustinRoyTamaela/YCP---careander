import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ReminderService } from './reminder.service';


@NgModule({
  declarations: [
    AppComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ReminderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
