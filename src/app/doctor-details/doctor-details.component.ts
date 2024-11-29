import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css'
})
export class DoctorDetailsComponent implements OnInit {
  doctorId: number | null = null;
  doctor: any; // This will hold the doctor details

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.doctorId = +params.get('id')!; // Get doctor id from route
      // You could use the doctorId to fetch more data (e.g., call a service to get doctor details)
      this.loadDoctorDetails(this.doctorId);
    });
  }

  loadDoctorDetails(id: number) {
    // Here you would call your API to fetch doctor details by id.
    // For now, just a dummy example:
    this.doctor = {
      id,
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      hospital: 'General Hospital',
      bio: 'Dr. John Doe is a renowned cardiologist with over 20 years of experience.',
      rating: 4.5,
      contact: '555-1234',
      address: '123 Health St, City'
    };
  }
}