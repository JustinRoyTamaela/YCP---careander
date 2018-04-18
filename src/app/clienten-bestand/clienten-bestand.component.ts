import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientenService } from '../clienten.service';


@Component({
  selector: 'app-clienten-bestand',
  templateUrl: './clienten-bestand.component.html',
  styleUrls: ['./clienten-bestand.component.css']
})
export class ClientenBestandComponent implements OnInit {
    

    clients: Client[];

 	  selectedClient: Client;

  constructor(private clientenService: ClientenService)
  { }

  ngOnInit() {
    this.getClienten();
  }

  getClienten(): void {
    this.clientenService.getClienten()
     .subscribe(clienten => this.clients = clienten);
  }


  addClient(
    id: number,
    name: string,
    leeftijd: string,
    imgurl: string,
    kenmerk1: string,
    kenmerk2: string,
    kenmerk3: string
    ): void {
  
    if (!name) { return; }
    this.clientenService.addClient({ id, name, leeftijd, imgurl, kenmerk1, kenmerk2, kenmerk3 } as Client).subscribe(
      () => this.getClienten()
      );
    }

  deleteClient(id): void {
    this.clients = this.clients.filter(h => h !== id);
    this.clientenService.deleteClient(id).subscribe(
      () => this.getClienten()
    );
    
  }


  onSelect(client: Client): void {
  	this.selectedClient = client;
  }



} //einde export class. blijf hierboven.
