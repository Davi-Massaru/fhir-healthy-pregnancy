import { Clipboard } from '@angular/cdk/clipboard';
import { EncounterService } from './../../services/encounter.service';
import { IEncounter } from 'fhir-typescript-models';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  encounters!:IEncounter[];
  stringJson!:string;

  constructor(private service: EncounterService, private clipboard: Clipboard) {}

  ngOnInit(): void {

    this.service.getEncounteReasonCode(environment.patientKey, '72892002')
    .subscribe((response) => {
      console.log(response);
      this.encounters = response;
      this.stringJson = JSON.stringify(this.encounters, undefined, 4);
    });


  }

  copyEncounter() {
    this.clipboard.copy(this.stringJson);
  }

}
