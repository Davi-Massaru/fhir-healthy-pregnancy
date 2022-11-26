import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalExamsComponent } from './medical-exams.component';

const routes: Routes = [{ path: '', component: MedicalExamsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalExamsRoutingModule { }
