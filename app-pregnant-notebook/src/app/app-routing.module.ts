import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/identification' },
  { path: 'identification', loadChildren: () => import('./pages/identification/identification.module').then(m => m.IdentificationModule) },
  { path: 'medical-exams', loadChildren: () => import('./pages/medical-exams/medical-exams.module').then(m => m.MedicalExamsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
