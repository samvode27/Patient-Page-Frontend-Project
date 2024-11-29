import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  role: string = ''; 
  otp: string = '';
  isOtpSent: boolean = false;
  otpVerified: boolean = false;


  private storedEmail: string = 'patient@gmail.com';
  private storedPassword: string = '123456';
  private storedOtp: string = '123456'; 

  constructor( private router: Router) {}


  sendOtp(): void {
    if (this.email === this.storedEmail) {
      this.isOtpSent = true;
      console.log('OTP sent to your email!');
    } else {
      alert('Email does not match our records.');
    }
  }

  verifyOtp(): void {
    if (this.otp === this.storedOtp) {
      this.otpVerified = true;
      console.log('OTP verified successfully!');

    } else {
      alert('Invalid OTP. Please try again.');
    }
  }

  onSubmit() {
    localStorage.setItem('user', JSON.stringify({
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    }));

    if (this.role === 'doctor') {
      this.router.navigate(['/doctordashboard']);
    } else {
      this.router.navigate(['/patientpage']);
    }
  }
}

