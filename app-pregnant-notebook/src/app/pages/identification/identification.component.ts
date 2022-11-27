import { IPatient } from 'fhir-typescript-models';
import { PatientService } from '../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.less']
})
export class IdentificationComponent implements OnInit {

  patient!:IPatient;
  stringJson!:string;

  constructor(private service: PatientService, private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.service.getPatientInformations(environment.patientKey)
    .subscribe((response) => {
      console.log(response);
      this.patient = response;
      this.stringJson = JSON.stringify(this.patient, undefined, 4);
    });
  }

  copyPatient() {
    this.clipboard.copy(this.stringJson);
  }

}
