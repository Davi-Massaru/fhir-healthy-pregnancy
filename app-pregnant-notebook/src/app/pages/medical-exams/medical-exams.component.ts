import { IObservation } from 'fhir-typescript-models';
import { ObservationService } from './../../services/observation.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-medical-exams',
  templateUrl: './medical-exams.component.html',
  styleUrls: ['./medical-exams.component.less']
})
export class MedicalExamsComponent implements OnInit {

  observations!:IObservation[];
  stringJson!:string;

  constructor(private service: ObservationService, private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.service.getPatientObservationsCategory(environment.patientKey, 'laboratory')
    .subscribe((response) => {
      console.log(response);

      this.observations = response;
      this.stringJson = JSON.stringify(this.observations, undefined, 4);
    });
  }

  copyObservation() {
    this.clipboard.copy(this.stringJson);
  }

}
