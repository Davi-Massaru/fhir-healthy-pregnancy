import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IEncounter } from 'fhir-typescript-models';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {

  constructor(private http: HttpClient) {}

  getEncounter(key: string) : Observable<IEncounter> {
    return this.http.get(`${environment.fhirserver}/Encounter/${key}`);
  }

  getEncounterPatient(patientId: string) : Observable<IEncounter[]> {
    return this.http.get(`${environment.fhirserver}/Encounter/?patient=${patientId}&_sort=date`)
      .pipe(map( (a: any) => a.entry?.map((entry: any) => entry.resource)));
  }

  getEncounteReasonCode(patientId: string, reasonCode: String) : Observable<IEncounter[]> {
    return this.http.get(`${environment.fhirserver}/Encounter/?patient=${patientId}&reason-code=${reasonCode}`)
      .pipe(map( (a: any) => a.entry?.map((entry: any) => entry.resource)));
  }

}
