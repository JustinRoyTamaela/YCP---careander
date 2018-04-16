import { Component, OnInit } from '@angular/core';
import { Dagtaak } from '../dagtaak';
import { DAGTAAK } from '../mock_dagtaak';

@Component({
  selector: 'app-dagtaken',
  templateUrl: './dagtaken.component.html',
  styleUrls: ['./dagtaken.component.css']
})
export class DagtakenComponent implements OnInit {

    dagtaken = DAGTAAK;
 	  selectedDagtaak: Dagtaak;

  constructor() { }

  ngOnInit() {
  }

  onSelect(dagtaak: Dagtaak): void {
  	this.selectedDagtaak = dagtaak;
  }

}
