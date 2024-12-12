import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  router = inject(Router);

  isMenuOpen = false;
  isMobile = false;
  isDarkTheme = false;
  isDropdownOpen= true;


  // Listen for window resize events to check if the screen width is under 940px
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobileScreen();
  }

  private checkMobileScreen() {
    this.isMobile = window.innerWidth <= 940;
    if (!this.isMobile) {
      this.isMenuOpen = false; // Close menu if screen is larger than 940px
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - 75, // Adjust the offset here
        behavior: 'smooth',
      });
      this.isMenuOpen = false;
    }
  }

  logout(){
    this.router.navigateByUrl("landingpage");
  }



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
    this.checkMobileScreen(); 

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
