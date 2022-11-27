import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IImmunization } from 'fhir-typescript-models';

@Injectable({
  providedIn: 'root'
})
export class ImmunizationService {

  constructor(private http: HttpClient) {}

  getImmunization(patientId: string) : Observable<IImmunization[]> {
    return this.http.get(`${environment.fhirserver}/Immunization/?patient=${patientId}&_sort=date`)
      .pipe(map( (a: any) => a.entry?.map((entry: any) => entry.resource)));
  }


}
