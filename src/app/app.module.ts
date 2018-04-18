import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { ClientenBestandComponent } from './clienten-bestand/clienten-bestand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VasteDagtakenComponent } from './vaste-dagtaken/vaste-dagtaken.component';
=======
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ReminderService } from './reminder.service';

>>>>>>> 5187ad02d36c302f2d1b5a00974ee63b7c22e7a4

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ClientenBestandComponent,
    DashboardComponent,
    VasteDagtakenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
=======
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ReminderService],
>>>>>>> 5187ad02d36c302f2d1b5a00974ee63b7c22e7a4
  bootstrap: [AppComponent]
})
export class AppModule { }
