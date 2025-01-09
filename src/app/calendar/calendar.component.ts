import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DatePipe]
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  selectedDate: Date | null = null;
  weeks: any[][] = [];
  
  readonly months: string[] = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  readonly days: string[] = ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    
    const startingDay = firstDay.getDay();
    const totalDays = lastDay.getDate();

    this.weeks = [];
    let currentWeek = new Array(7).fill(null);
    let currentDay = 1;

    // Fill in the first week with empty spaces until the first day
    for (let i = startingDay; i < 7 && currentDay <= totalDays; i++) {
      currentWeek[i] = currentDay++;
    }
    this.weeks.push([...currentWeek]);

    // Fill in the rest of the weeks
    currentWeek = new Array(7).fill(null);
    let currentWeekDay = 0;

    while (currentDay <= totalDays) {
      if (currentWeekDay === 7) {
        this.weeks.push([...currentWeek]);
        currentWeek = new Array(7).fill(null);
        currentWeekDay = 0;
      }
      currentWeek[currentWeekDay++] = currentDay++;
    }

    // Push the last week if it has any days
    if (currentWeek.some(day => day !== null)) {
      this.weeks.push([...currentWeek]);
    }
  }

  previousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  selectDate(day: number) {
    if (day) {
      this.selectedDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        day
      );
    }
  }

  isSelected(day: number): boolean {
    if (!day || !this.selectedDate) return false;
    return (
      this.selectedDate.getDate() === day &&
      this.selectedDate.getMonth() === this.currentDate.getMonth() &&
      this.selectedDate.getFullYear() === this.currentDate.getFullYear()
    );
  }
}
