import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {
  patient = {
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
    age: 30,
    phone: '123-456-7890'
  };

  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.patient.name, [Validators.required, Validators.minLength(3)]],
      username: [this.patient.username, [Validators.required, Validators.minLength(3)]],
      email: [this.patient.email, [Validators.required, Validators.email]],
      age: [this.patient.age, [Validators.required, Validators.min(18)]],
      phone: [this.patient.phone, [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]]
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Profile updated:', this.profileForm.value);
    }
  }
}
