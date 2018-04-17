import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Reminder } from '../reminder';
// import { REMINDERS } from '../mock-reminders';
import { ReminderService } from '../reminder.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  // newReminder: string;
  // // reminders: any;
  // reminderObj: any;
  // taskCompleted: false;
  // // console.log(JSON.stringify(taskCompleted));

 
  reminders: Reminder[];

  selectedReminder: Reminder;

  constructor(private reminderService: ReminderService) {
    //  this.newReminder = '';
    //  this.reminders = REMINDERS;
   }

  

  delete(id): void {
    this.reminders = this.reminders.filter(h => h !== id);
    this.reminderService.deleteReminder(id).subscribe(
      () => this.getReminders()
    );
    
  }

  // delete(reminder) {
  //   this.reminderService.deleteReminder(reminder).subscribe(
  //     () => this.getAllReminders()
  //   );
  // }

    // delete(reminder) {
  //   this.reminderService.deleteReminder(reminder).subscribe(
  //     () => this.getAllReminders()
  //   );
  // }

   
  ngOnInit() {
    this.getReminders();
  }

  getReminders(): void {
    this.reminderService.getReminders()
     .subscribe(reminders => this.reminders = reminders);
  }

  /** Function to update reminder completion */
  // save(): void {
  //   this.reminderService.updateReminder(this.reminder)
  //     .subscribe();
  // }




    
  /** Function to add a new reminder */
  
  // add(id: number, client: string, task: string, time: string, info: string, completed: string): void {
  
  //   client = client.trim();
  //   task = task.trim();
  //   time = time.trim();
  //   info = info.trim();
  //   completed = completed.trim();
  //   if (!client) { return; }
  //   this.reminderService.addReminder({ id, client, task, time, info, completed } as Reminder)
  //     .subscribe(reminder => {
  //       this.reminders.push(reminder);
  //     });
  // }

  add(id: number, client: string, task: string, time: string, info: string, completed: string): void {
  
    client = client.trim();
    task = task.trim();
    time = time.trim();
    info = info.trim();
    completed = completed.trim();
    if (!client) { return; }
    this.reminderService.addReminder({ id, client, task, time, info, completed } as Reminder).subscribe(
      () => this.getReminders()
      );
  }

}