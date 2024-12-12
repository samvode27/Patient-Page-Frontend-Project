import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNotificationComponent } from './patient-notifications.component';

describe('PatientNotificationsComponent', () => {
  let component: PatientNotificationComponent;
  let fixture: ComponentFixture<PatientNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
