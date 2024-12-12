import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LandingfooterComponent } from '../landingfooter/landingfooter.component';
import { LandingheaderComponent } from '../landingheader/landingheader.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LandingfooterComponent, LandingheaderComponent, FormsModule, CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingPageComponent {
  searchQuery: string = '';

  doctors = [
    { name: 'Dr. Angelina M.', specialty: 'Cardiology', picture: '/assets/images/doctor3.jpg' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatology', picture: '/assets/images/doct2.jpg'},
    { name: 'Dr. Emily Davis', specialty: 'Neurology', picture: '/assets/images/doc1.jpg'},
    
  ]  
  get filteredDoctors() {
    return this.doctors.filter(doctors =>
      doctors.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      doctors.specialty.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


}