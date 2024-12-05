import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-home.component.html',
  styleUrl: './patient-home.component.css'
})
export class PatientHomeComponent {

  searchQuery: string = '';

  selectedSpecialty: string = ''; 

  specialties: string[] = ['Cardiology', 'Dermatology', 'Neurology', 'Orthopedics']; 

  topDoctors: any[] = [
    { id: 1, name: 'Dr. John Doe', hospital: 'General Hospital', rating: 4.5, specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', hospital: 'City Center', rating: 4.8, specialty: 'Dermatology' },
    { id: 3, name: 'Dr. Sam Brown', hospital: 'St. Paul’s Clinic', rating: 4.3, specialty: 'Neurology' },
  ];

  filteredDoctors: any[] = [...this.topDoctors]; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  searchDoctors() {
    this.filteredDoctors = this.topDoctors.filter(doctor => {
      const matchesQuery = doctor.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesSpecialty = this.selectedSpecialty ? doctor.specialty === this.selectedSpecialty : true;
      return matchesQuery && matchesSpecialty;
    });
  }
  
  
}
