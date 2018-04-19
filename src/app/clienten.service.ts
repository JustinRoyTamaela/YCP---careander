import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Client } from './client';


@Injectable()
export class ClientenService {

    constructor(
    private http: HttpClient
    // ,private messageService: MessageService 
    ) 
    { }

  	getClienten(): Observable<any>  {
    return this.http.get('http://localhost:3000/clienten'); //onthoud de path naar 3000/ dit moet overeenkomen met je app.get in de node server
  	}

  	addClient(client: Client): Observable<any> {
  	return this.http.post('http://localhost:3000/clientToevoegen', client);
	}

	deleteClient(id) {
  	return this.http.delete('http://localhost:3000/delClient/' + id);
	}



}
