import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ImmunizationRoutesModule } from './Immunization.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmunizationComponent } from './Immunization.component';

@NgModule({
  imports: [
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzLayoutModule,
    NzInputModule,
    NzDatePickerModule,
    CommonModule,
    ImmunizationRoutesModule
  ],
  declarations: [ImmunizationComponent]
})
export class ImmunizationModule { }
