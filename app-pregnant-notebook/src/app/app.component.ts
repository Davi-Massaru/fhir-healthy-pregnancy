import { environment } from '../environments/environment';
import { ObservationService } from './services/observation.service';
import { IObservation } from 'fhir-typescript-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  observationDLM!:IObservation;
  isCollapsed = false;

  constructor(private service: ObservationService) {}

  ngOnInit(): void {
    this.service.getPatientObservationsWithCode(environment.patientKey,'8665-2').subscribe((observations)=> {
      this.observationDLM = observations[0];
    });
  }
}
