import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  searchQuery: string = '';
  
  contacts = [
    { name: 'Dr. John Doe', specialty: 'Cardiology', picture: '/assets/images/doct1.jpg' },
    { name: 'Jane Smith', specialty: 'Patient', picture: '/assets/images/p2.jpg' },
    { name: 'Dr. Emily Adams', specialty: 'Dermatology', picture: '/assets/images/doctor2.avif' },
    { name: 'Michael Brown', specialty: 'Patient', picture: '/assets/images/p1.jpg' },
    { name: 'Dr. Mark Taylor', specialty: 'Orthopedics', picture: '/assets/images/p2.jpg' },
    { name: 'Maria Taylor', specialty: 'Orthopedics', picture: '/assets/images/p1.jpg' },
    { name: 'Dr. Jane Taylor', specialty: 'Orthopedics', picture: '/assets/images/doctor2.avif' },
  ];

  // Filter the contacts based on the search query
  get filteredContacts() {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      contact.specialty.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }



  contact = { name: 'Dr. John Doe', picture: '/assets/images/doct1.jpg', specialty: 'Cardiology' };


  messages = [
    { type: 'text', sender: 'Dr. John Doe', content: 'Hello, how can I help you today?' },
    { type: 'text', sender: 'Jane Smith', content: 'I have a pain in my chest.' },
    { type: 'audio', sender: 'Dr. John Doe', content: 'audio_file_url' },
    // Add more messages here
  ];

  message = '';
  
  sendMessage() {
    console.log('Message sent:', this.message);
    this.message = ''; // Reset after sending
  }
}
