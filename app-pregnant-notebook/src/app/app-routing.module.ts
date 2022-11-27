import { EncounterModule } from './pages/encounter/encounter.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/identification' },
  { path: 'identification', loadChildren: () => import('./pages/identification/identification.module').then(m => m.IdentificationModule) },
  { path: 'medical-exams', loadChildren: () => import('./pages/medical-exams/medical-exams.module').then(m => m.MedicalExamsModule) },
  { path: 'ultrasounds', loadChildren: () => import('./pages/ultrasounds/ultrasounds.module').then(m => m.UltrasoundsModule) },
  { path: 'vital-signs', loadChildren: () => import('./pages/vital-signs/vital-signs.module').then(m => m.VitalSignsModule) },
  { path: 'pregnancy-monitoring', loadChildren: () => import('./pages/pregnancy-monitoring/pregnancy-monitoring.module').then(m => m.PregnancyMonitoringModule) },
  { path: 'Immunization', loadChildren: () => import('./pages/Immunizations/Immunization.module').then(m => m.ImmunizationModule) },
  { path: 'encounter', loadChildren: () => import('./pages/encounter/encounter.module').then(m => m.EncounterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
