import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalExamsComponent } from './medical-exams.component';

describe('MedicalExamsComponent', () => {
  let component: MedicalExamsComponent;
  let fixture: ComponentFixture<MedicalExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
