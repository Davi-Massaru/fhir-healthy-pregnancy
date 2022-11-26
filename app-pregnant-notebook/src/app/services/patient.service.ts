import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatient } from 'fhir-typescript-models';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {}

  getPatientInformations(patientId: string) : Observable<IPatient> {
    return this.http.get(`${environment.fhirserver}/Patient/${patientId}`);
  }
}
