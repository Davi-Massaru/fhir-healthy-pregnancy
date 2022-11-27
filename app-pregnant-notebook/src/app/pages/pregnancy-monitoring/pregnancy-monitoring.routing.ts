import { PregnancyMonitoringComponent } from './pregnancy-monitoring.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: PregnancyMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PregnancyMonitoringRoutesModule { }
