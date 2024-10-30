import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  email: string = '';

  subscribe() {
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.email)) {
      alert("Your email has been added." + this.email);
      this.email = ''; // Clear the input after subscription
    } else {
      alert("Please enter a valid email address." );
    }
  }

}
