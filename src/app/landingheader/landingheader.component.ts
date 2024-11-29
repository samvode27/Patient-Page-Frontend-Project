import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landingheader',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './landingheader.component.html',
  styleUrl: './landingheader.component.css'
})
export class LandingheaderComponent {

  router = inject(Router);

  menuActive = false;

  // Toggle the menu when hamburger or close button is clicked
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
