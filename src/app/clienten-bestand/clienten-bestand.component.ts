import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { CLIENTS} from '../mock_clients';

@Component({
  selector: 'app-clienten-bestand',
  templateUrl: './clienten-bestand.component.html',
  styleUrls: ['./clienten-bestand.component.css']
})
export class ClientenBestandComponent implements OnInit {
    clients = CLIENTS;
 	  selectedClient: Client;

  constructor() { }

  ngOnInit() {
  }

  onSelect(client: Client): void {
  	this.selectedClient = client;
  }

}
