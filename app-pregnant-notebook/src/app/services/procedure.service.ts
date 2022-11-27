import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBundle, IProcedure } from 'fhir-typescript-models';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  constructor(private http: HttpClient) {}

  getProcedurePatient(patientId: string) : Observable<IProcedure[]> {
    return this.http.get(`${environment.fhirserver}/Procedure/?patient=${patientId}&_sort=date`)
      .pipe(map( (a: any) => a.entry?.map((entry: any) => entry.resource)));
  }

  getProcedureWithCode(patientId: string, code: String) : Observable<IProcedure[]> {
    return this.http.get(`${environment.fhirserver}/Procedure/?patient=${patientId}&code=${code}&_sort=date`)
      .pipe(map( (a: any) => a.entry?.map((entry: any) => entry.resource)));
  }

  getProcedureReasonCode(patientId: string, reasonCode: String) : Observable<IProcedure[]> {
    return this.http.get(`${environment.fhirserver}/Procedure/?patient=${patientId}&reason-code=${reasonCode}`)
      .pipe(map( (a: any) => a.entry?.map((entry: any) => entry.resource)));
  }

}
