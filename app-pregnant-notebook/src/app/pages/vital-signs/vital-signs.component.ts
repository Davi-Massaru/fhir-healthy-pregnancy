import { Clipboard } from '@angular/cdk/clipboard';
import { ObservationService } from './../../services/observation.service';
import { IObservation } from 'fhir-typescript-models';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements OnInit {

  observations!:IObservation[];
  stringJson!:string;

  constructor(private service: ObservationService, private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.service.getPatientObservationsCategory(environment.patientKey,'vital-signs')
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
