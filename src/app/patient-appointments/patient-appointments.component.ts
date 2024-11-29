import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-appointments',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-appointments.component.html',
  styleUrl: './patient-appointments.component.css'
})
export class PatientAppointmentsComponent {

  upcomingAppointments = [
    { doctor: 'Dr. John Doe', specialty: 'Cardiology', date: '2024-12-05', status: 'Upcoming' },
    { doctor: 'Dr. Jane Smith', specialty: 'Dermatology', date: '2024-12-10', status: 'Upcoming' },
    { doctor: 'Dr. John Doe', specialty: 'Cardiology', date: '2024-12-05', status: 'Upcoming' },
    { doctor: 'Dr. Jane Smith', specialty: 'Dermatology', date: '2024-12-10', status: 'Upcoming' },
  ];
  
  isModalOpen = false;
  appointment = { doctor: '', specialty: '', date: '' };

  bookAppointment() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitAppointment() {
    console.log(this.appointment);
    this.closeModal();
  }

}
