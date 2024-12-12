import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { PatientBlogComponent } from './patient-blog/patient-blog.component';
import { PatientNotificationComponent } from './patient-notifications/patient-notifications.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { ChatComponent } from './chat/chat.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { PatientpageComponent } from './patientpage/patientpage.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { LandingfooterComponent } from './landingfooter/landingfooter.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';


export const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full'},
  { path: 'home', component: PatientHomeComponent },
  { path: 'appointments', component: PatientAppointmentsComponent },
  { path: 'blog', component: PatientBlogComponent },
  { path: 'notifications', component: PatientNotificationComponent },
  { path: 'profile', component: PatientProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patientpage', component: PatientpageComponent },
  { path: 'landingpage', component: LandingPageComponent },
  { path: 'landingfooter', component: LandingfooterComponent },
  { path: 'doctor/:id', component: DoctorDetailsComponent },
  { path: 'profile-modal', component: ProfileModalComponent },
   // Doctor details route   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
