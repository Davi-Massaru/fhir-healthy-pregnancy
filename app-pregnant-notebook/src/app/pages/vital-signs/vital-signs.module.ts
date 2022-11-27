import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { VitalSignsRoutesModule } from './vital-signs.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitalSignsComponent } from './vital-signs.component';

@NgModule({
  imports: [
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzLayoutModule,
    NzInputModule,
    NzDatePickerModule,
    CommonModule,
    VitalSignsRoutesModule
  ],
  declarations: [VitalSignsComponent]
})
export class VitalSignsModule { }
