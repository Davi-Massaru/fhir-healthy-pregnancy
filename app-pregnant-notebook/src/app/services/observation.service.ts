import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IObservation, IBundle } from 'fhir-typescript-models';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  constructor(private http: HttpClient) {}

  getPatientObservations(patientId: string) : Observable<IObservation> {
    return this.http.get(`${environment.fhirserver}/Observation/?patient=${patientId}&_sort=date`);
  }

  getPatientObservationsWithCode(patientId: string, code:string ) : Observable<IObservation[]> {
    return this.http.get(`${environment.fhirserver}/Observation/?patient=${patientId}&code=${code}&_sort=date`)
      .pipe(map( (a: any) => a.entry?.map((entry: any) => entry.resource)));
  }

  getPatientObservationsCategory(patientId: string, category:string) : Observable<IObservation[]> {
    return this.http.get(`${environment.fhirserver}/Observation/?patient=${patientId}&category=${category}&_sort=date`)
      .pipe(map( (a: any) => a.entry?.map((entry: any) => entry.resource)));
  }


}
