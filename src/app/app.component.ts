import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { PatientBlogComponent } from './patient-blog/patient-blog.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientpageComponent } from './patientpage/patientpage.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent, HeaderComponent, PatientHomeComponent, PatientBlogComponent, PatientAppointmentsComponent,PatientProfileComponent, PatientpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice5';
}
