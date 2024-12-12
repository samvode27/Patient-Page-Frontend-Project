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
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', picture: '/assets/images/doct1.jpg' },
    { id: 2, name: 'Jane Smith', specialty: 'Patient', picture: '/assets/images/p2.jpg' },
    { id: 3, name: 'Dr. Emily Adams', specialty: 'Dermatology', picture: '/assets/images/doctor2.avif' },
    { id: 4, name: 'Michael Brown', specialty: 'Patient', picture: '/assets/images/p1.jpg' },
    { id: 5, name: 'Dr. Mark Taylor', specialty: 'Orthopedics', picture: '/assets/images/p2.jpg' },
    { id: 6, name: 'Maria Taylor', specialty: 'Orthopedics', picture: '/assets/images/p1.jpg' },
    { id: 7, name: 'Dr. Jane Taylor', specialty: 'Orthopedics', picture: '/assets/images/doctor2.avif' },
  ];

  currentContact = this.contacts[0]; // Default to the first contact

  // Store messages separately for each contact
  chatHistory: Record<number, { type: string, sender: string, content: string }[]> = {
    1: [
      { type: 'text', sender: 'Dr. John Doe', content: 'Hello, how can I help you today?' },
      { type: 'text', sender: 'Jane Smith', content: 'I have a pain in my chest.' },
      { type: 'audio', sender: 'Dr. John Doe', content: 'audio_file_url' },
    ],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  };

  message = '';

  // Filter the contacts based on the search query
  get filteredContacts() {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      contact.specialty.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Fetch messages for the currently selected contact
  get messages() {
    return this.chatHistory[this.currentContact.id] || [];
  }

  // Switch chat to the selected contact
  selectContact(contact: any) {
    this.currentContact = contact;
  }

  // Send a message and add it to the chat history
  sendMessage() {
    if (this.message.trim()) {
      this.chatHistory[this.currentContact.id].push({
        type: 'text',
        sender: 'You',
        content: this.message
      });
      this.message = ''; // Reset the input field
    }
  }
}
