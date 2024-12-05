import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landingheader',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './landingheader.component.html',
  styleUrls: ['./landingheader.component.css']
})
export class LandingheaderComponent implements OnInit {

  router = inject(Router);

  isMenuOpen = false;
  isMobile = false;
  isDarkTheme = false;
  isDropdownOpen= true;

  ngOnInit(): void {
    this.checkMobileScreen(); // Initial check for screen size
  }

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
    }
  }

}
