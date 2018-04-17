import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Reminder } from './reminder';
// import { REMINDERS } from './mock-reminders';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReminderService {

  // private remindersUrl = 'api/reminders';  // URL to web api
  // private remindersUrl = 'http://localhost:3000/todos';  // URL to Node

  /** GET reminders from the server */
  // getReminders (): Observable<Reminder[]> {
 
  //   return this.http.get<Reminder[]>('http://localhost:3000/reminders')
  //     .pipe(
  //       tap(reminders => this.log('fetched reminders')),
  //       catchError(this.handleError('getReminders', []))
  //     );
  // }

  getReminders(): Observable<any>  {
    return this.http.get('http://localhost:3000/reminders');
      
  }
  


  /** GET reminder by id. Will 404 if id not found */
  // getReminder(id: number): Observable<Reminder> {
  //   const url = '${this.remindersUrl}/${id}';
  //   return this.http.get<Reminder>(url).pipe(
  //     tap(_ => this.log('fetched reminder id=${id}')),
  //     catchError(this.handleError<Reminder>('getReminder id=${id}'))
  //   );
  // }

  // getReminders(): Observable<Reminder[]>  {
  //   return this.http.get('http://localhost:3000/todos')
  //   .pipe(
  //     tap(reminders => this.log('fetched reminders')),
  //     catchError(this.handleError('getReminders', []))
  //   );
    
  

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


/** POST: add a new hero to the server */
// addReminder (reminder: Reminder): Observable<Reminder> {
//   return this.http.post<Reminder>(this.remindersUrl, reminder, httpOptions).pipe(
//     tap((reminder: Reminder) => this.log(`added reminder w/ id=${reminder.id}`)),
//     catchError(this.handleError<Reminder>('addReminder'))
//   );
// }

addReminder(reminder: Reminder): Observable<any> {
  return this.http.post('http://localhost:3000/reminder', reminder);
}

deleteReminder(id) {
  return this.http.delete('http://localhost:3000/delReminder/' + id);
  
    

}


/** PUT Edit Reminder (used for checking completion) complete() */
// updateReminder (reminder: Reminder): Observable<any> {
//   return this.http.put(this.remindersUrl, reminder, httpOptions).pipe(
//     tap(_ => this.log(`updated reminder id=${reminder.id}`)),
//     catchError(this.handleError<any>('updateReminder'))
//   );
// }





    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add('ReminderService: ' + message);
    }
}
