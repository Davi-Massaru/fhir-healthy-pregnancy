import { ProcedureService } from './../../services/procedure.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from './../../../environments/environment';

import { IProcedure } from 'fhir-typescript-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregnancy-monitoring',
  templateUrl: './pregnancy-monitoring.component.html',
  styleUrls: ['./pregnancy-monitoring.component.css']
})
export class PregnancyMonitoringComponent implements OnInit {

  procedures!:IProcedure[];
  stringJson!:string;

  constructor(private service: ProcedureService, private clipboard: Clipboard) {}

  ngOnInit(): void {

    this.service.getProcedurePatient(environment.patientKey )//, '72892002')
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
