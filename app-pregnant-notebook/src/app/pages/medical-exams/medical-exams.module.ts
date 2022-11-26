import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalExamsRoutingModule } from './medical-exams-routing.module';
import { MedicalExamsComponent } from './medical-exams.component';


@NgModule({
  declarations: [
    MedicalExamsComponent
  ],
  imports: [
    CommonModule,
    MedicalExamsRoutingModule
  ]
})
export class MedicalExamsModule { }
