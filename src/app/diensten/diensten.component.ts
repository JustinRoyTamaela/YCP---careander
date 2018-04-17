import { Component, OnInit } from '@angular/core';

import { Dienst } from '../dienst';

@Component({
  selector: 'app-diensten',
  templateUrl: './diensten.component.html',
  styleUrls: ['./diensten.component.css']
})

export class DienstenComponent implements OnInit {

	dagdienst: Dienst = {
		id: 1,
		name: 'Dagdienst'
	}
	



	middagdienst = "Middagdienst";
	avonddienst = "Avonddienst";


  constructor() { }

  ngOnInit() {
  }

}
