import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { IdentificationRoutingModule } from './identification-routing.module';
import { IdentificationComponent } from './identification.component';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    IdentificationComponent
  ],
  imports: [
    NzFormModule,
    NzLayoutModule,
    NzInputModule,
    CommonModule,
    IdentificationRoutingModule
  ]
})
export class IdentificationModule { }
