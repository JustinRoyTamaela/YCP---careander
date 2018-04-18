import { Component, OnInit } from '@angular/core';
import { Dagdienst } from '../dagdienst';
import { DAGDIENST } from '../mock_dagdienst';

import { Middagdienst } from '../middagdienst';
import { MIDDAGDIENST } from '../mock_middagdienst';

import { Avonddienst } from '../avonddienst';
import { AVONDDIENST } from '../mock_avonddienst';



@Component({
  selector: 'app-vaste-dagtaken',
  templateUrl: './vaste-dagtaken.component.html',
  styleUrls: ['./vaste-dagtaken.component.css']
})
export class VasteDagtakenComponent implements OnInit {

	Dagdienst = DAGDIENST;
	Middagdienst = MIDDAGDIENST;
	Avonddienst = AVONDDIENST;

	// Dagdienst: Dagdienst = {
	// 	titel: 'titel van taak',
	// 	omschrijving: 'omschrijving van taak'
	// }

  constructor() { }

  ngOnInit() {
  }

}
