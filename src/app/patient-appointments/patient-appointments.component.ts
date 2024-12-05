import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-appointments',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
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

  // Function to open the modal
  bookAppointment() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Function to handle the form submission
  submitAppointment() {
    // Add the new appointment to the upcomingAppointments array
    this.upcomingAppointments.push({
      doctor: this.appointment.doctor,
      specialty: this.appointment.specialty,
      date: this.appointment.date,
      status: 'Upcoming'
    });

    // Close the modal after submission
    this.closeModal();

    // Reset the form data
    this.appointment = { doctor: '', specialty: '', date: '' };
  }
}
