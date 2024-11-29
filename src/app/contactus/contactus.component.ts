import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactUsComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted!', this.contactData);
    alert('Your message has been submitted!');
  }
}
