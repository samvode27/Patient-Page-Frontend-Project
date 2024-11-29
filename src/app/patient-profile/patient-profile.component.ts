import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})

export class PatientProfileComponent implements OnInit {

  profileForm: FormGroup;
  passwordMatchValidator: any;

  patient = {
    name: 'John Doe',
    username: 'johndoe123',
    email: 'johndoe@example.com',
    age: 30,
    phone: '123-456-7890'
  };

  updateProfile(): void {
    this.router.navigate(['/profile-settings']);
  }


  constructor(private fb: FormBuilder, private router: Router) { this.profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  }, { 
    validator: this.passwordMatchValidator
  });}
  

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)]]
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Profile updated:', this.profileForm.value);
      alert('Profile updated successfully!');
      this.router.navigate(['/patientpage']); 
    } else {
      alert('Please fill the form correctly!');
    }
  }

  get f() {
    return this.profileForm.controls;
  }

}
