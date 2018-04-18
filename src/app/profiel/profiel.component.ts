import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { CLIENTS } from '../mock_clients';



@Component({
  selector: 'app-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.css']
})

export class ProfielComponent implements OnInit {
	clients = CLIENTS;

	selectedClient: Client;



  constructor() { }

  ngOnInit() {
  }



	onSelect(client: Client): void {
  	this.selectedClient = client;
	}

}


