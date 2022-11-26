import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDiagnosticReport } from 'fhir-typescript-models';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticReportService {

  constructor(private http: HttpClient) {}

  getPatientDiagnosticReport(patientId: string) : Observable<IDiagnosticReport> {
    return this.http.get(`${environment.fhirserver}/DiagnosticReport/?patient=${patientId}&_sort=date`);
  }


}
