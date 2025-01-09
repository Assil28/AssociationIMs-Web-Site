import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AcceuilComponent } from '../acceuil/acceuil.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AcceuilComponent], // Import AcceuilComponent here
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
