import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Reminder } from '../reminder';
import { ReminderService } from '../reminder.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
 
  reminders: Reminder[];

  selectedReminder: Reminder;

  constructor(private reminderService: ReminderService) {
    //  this.newReminder = '';
    //  this.reminders = REMINDERS;
   }

  //  markCompleted(id, checkbox): void {
  //   this.reminders = this.reminders.filter(h => h !== id);
  //   this.reminderService.deleteReminder(id, checkbox).subscribe(
  //     () => this.getReminders()
  //   );
    
  // }

  

  delete(id): void {
    this.reminders = this.reminders.filter(h => h !== id);
    this.reminderService.deleteReminder(id).subscribe(
      () => this.getReminders()
    );
    
  }

   
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