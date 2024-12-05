import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-blog.component.html',
  styleUrl: './patient-blog.component.css'
})
export class PatientBlogComponent {

  
  blogs = [
    { title: 'My First Blog', content: 'This is the content of my first blog post.', author: 'Dr. Smith', date: new Date().toLocaleDateString() },
    { title: 'Health Tips for Winter', content: 'Here are some health tips to keep you healthy during winter.', author: 'Dr. Jane Doe', date: new Date().toLocaleDateString() },
  ];
  
  newBlog = { title: '', content: '', author: '' };
  comment = '';

  isModalOpen = false;

  openAddBlogModal() {
    this.isModalOpen = true;
  }

  closeAddBlogModal() {
    this.isModalOpen = false;
  }

  addComment(blog: any) {
    if (this.comment.trim()) {
      console.log(`Comment added: ${this.comment}`);
      this.comment = ''; 
    }
  }
}
