import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    {  title: 'My First Blog',  content: 'This is the content of my first blog post.',  author: 'Dr. Smith',  date: new Date().toLocaleDateString(), },
    {  title: 'Health Tips for Winter',  content: 'Here are some health tips to keep you healthy during winter.',  author: 'Dr. Jane Doe',  date: new Date().toLocaleDateString(),  },
  ];

  newBlog = {  title: '',  content: '',  author: ''  };
  
  comment = '';

  openAddBlogModal() {
    const modal = new window.bootstrap.Modal(document.getElementById('addBlogModal'));
    modal.show();
  }

  addBlog() {
    if (this.newBlog.title && this.newBlog.content && this.newBlog.author) {
      const newPost = {
        ...this.newBlog,
        date: new Date().toLocaleDateString(),
      };
      this.blogs.push(newPost);
      this.newBlog = { title: '', content: '', author: '' }; 

      const modal = new window.bootstrap.Modal(document.getElementById('addBlogModal'));
      modal.hide();
    }
  }

  addComment(blog: any) {
    if (this.comment.trim()) {
      console.log(`Comment added: ${this.comment}`);
      this.comment = ''; 
    }
  }
  
}
