import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports:[CommonModule]
})
export class NavbarComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    console.log("hamburger button clicked");
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log(this.isMobileMenuOpen);
  }
}
