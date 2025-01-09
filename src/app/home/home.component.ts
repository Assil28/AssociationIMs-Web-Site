import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AcceuilComponent,CalendarComponent], // Import AcceuilComponent here
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isDrawerOpen = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
