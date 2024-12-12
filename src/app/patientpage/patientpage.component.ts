import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PatientHomeComponent } from '../patient-home/patient-home.component';
import { PatientAppointmentsComponent } from '../patient-appointments/patient-appointments.component';
import { PatientBlogComponent } from '../patient-blog/patient-blog.component';
import { ChatComponent } from '../chat/chat.component';
import { PatientNotificationComponent } from '../patient-notifications/patient-notifications.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsComponent } from '../contactus/contactus.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-patientpage',
  standalone: true,
  imports: [HeaderComponent, PatientHomeComponent ,PatientAppointmentsComponent, PatientBlogComponent, FooterComponent,ChatComponent, PatientNotificationComponent, ContactUsComponent],
  templateUrl: './patientpage.component.html',
  styleUrl: './patientpage.component.css'
})
export class PatientpageComponent {
  patient = {
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
    age: 30,
    phone: '123-456-7890'
  };

  constructor(public dialog: MatDialog) {}

  openProfileModal(patient: any) {
    const dialogRef = this.dialog.open(ProfileModalComponent, {
      width: '600px',
      data: { patient: patient }
    });
  }
}
