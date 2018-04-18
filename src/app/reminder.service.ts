import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Reminder } from './reminder';
import { REMINDERS } from './mock-reminders';

@Injectable()
export class ReminderService {

  getReminders(): Observable<Reminder[]> {
    return of (REMINDERS);
  }

  constructor() { }

}
