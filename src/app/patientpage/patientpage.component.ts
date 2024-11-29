import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PatientHomeComponent } from '../patient-home/patient-home.component';
import { PatientAppointmentsComponent } from '../patient-appointments/patient-appointments.component';
import { PatientBlogComponent } from '../patient-blog/patient-blog.component';
import { PatientNotificationComponent } from '../patient-notifications/patient-notifications.component';
import { FooterComponent } from '../footer/footer.component';
import { ChatComponent } from '../chat/chat.component';
import { ContactUsComponent } from '../contactus/contactus.component';

@Component({
  selector: 'app-patientpage',
  standalone: true,
  imports: [HeaderComponent, PatientHomeComponent, PatientNotificationComponent ,PatientAppointmentsComponent, PatientBlogComponent, FooterComponent, ChatComponent, ContactUsComponent],
  templateUrl: './patientpage.component.html',
  styleUrl: './patientpage.component.css'
})
export class PatientpageComponent {

}
