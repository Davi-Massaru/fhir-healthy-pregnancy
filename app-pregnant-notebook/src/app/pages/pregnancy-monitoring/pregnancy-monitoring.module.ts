import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PregnancyMonitoringRoutesModule } from './pregnancy-monitoring.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PregnancyMonitoringComponent } from './pregnancy-monitoring.component';

@NgModule({
  imports: [
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzLayoutModule,
    NzInputModule,
    NzDatePickerModule,
    CommonModule,
    PregnancyMonitoringRoutesModule
  ],
  declarations: [PregnancyMonitoringComponent]
})
export class PregnancyMonitoringModule { }

