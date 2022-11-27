import { EncounterService } from './../../services/encounter.service';
import { ProcedureService } from './../../services/procedure.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { IProcedure, IEncounter } from 'fhir-typescript-models';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ultrasounds',
  templateUrl: './ultrasounds.component.html',
  styleUrls: ['./ultrasounds.component.css']
})
export class UltrasoundsComponent implements OnInit {

  procedures!:IProcedure[];
  procedureEncounter!:IEncounter[];
  stringJson!:string;

  constructor(private service: ProcedureService ,private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.service.getProcedureWithCode(environment.patientKey,'169230002')
    .subscribe((response) => {
      console.log(response);
      this.procedures = response;
      this.stringJson = JSON.stringify(this.procedures, undefined, 4);
    });
  }



  copyObservation() {
    this.clipboard.copy(this.stringJson);
  }

}
