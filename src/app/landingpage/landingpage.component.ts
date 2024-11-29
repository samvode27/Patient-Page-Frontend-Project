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
    { name: 'Dr. John Doe', specialty: 'Cardiology', picture: '/assets/images/doct1.jpg' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatology', picture: '/assets/images/doctor2.avif'},
    { name: 'Dr. Emily Davis', specialty: 'Neurology', picture: '/assets/images/p2.jpg'},
    
  ]  
  get filteredDoctors() {
    return this.doctors.filter(doctors =>
      doctors.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      doctors.specialty.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


}