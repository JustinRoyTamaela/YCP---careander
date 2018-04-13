import { Component, OnInit } from '@angular/core';
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

  


//   completeTask(event, index) {
    
//     if(event.target.checked){ 
//       this.taskCompleted = true;       
//     }
//     else {
//       this.taskCompleted = false;
//     }
//  }

  // completeTask(index) {
  //   this.taskCompleted = false;
  // }

  deleteTask(index) {
    this.reminders.splice(index, 1);
    }


  constructor(private reminderService: ReminderService) {
    //  this.newReminder = '';
    //  this.reminders = REMINDERS;
   }

  //  addReminder(event) {
  //   this.reminderObj = {
  //     newReminder: this.newReminder,
  //     completed: false
  //   }
  //   this.reminders.push(this.reminderObj);
  //   this.newReminder = '';
  //   event.preventDefault();
  // }

   
  ngOnInit() {
    this.getReminders();
  }

  // onSelect(event, reminder: Reminder): void {
  //   if(event.target.checked){
  //   this.completedReminder = reminder;
  //   }
  //   else {
  //   this.completedReminder = '';
  //   }
  // }

  getReminders(): void {
    this.reminderService.getReminders()
     .subscribe(reminders => this.reminders = reminders);
  }
  
}
