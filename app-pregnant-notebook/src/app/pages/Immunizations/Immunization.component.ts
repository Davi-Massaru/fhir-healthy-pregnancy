import { environment } from './../../../environments/environment';
import { ImmunizationService } from './../../services/imuzations';
import { Component, OnInit } from '@angular/core';
import { IImmunization } from 'fhir-typescript-models';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-Immunization',
  templateUrl: './Immunization.component.html',
  styleUrls: ['./Immunization.component.css']
})
export class ImmunizationComponent implements OnInit {

  immunization!:IImmunization[];
  stringJson!:string;

  constructor(private service: ImmunizationService, private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.service.getImmunization(environment.patientKey)
    .subscribe((response) => {
      console.log(response);
      this.immunization = response;
      this.stringJson = JSON.stringify(this.immunization, undefined, 4);
    });
  }

  copyImmunization() {
    this.clipboard.copy(this.stringJson);
  }

}
