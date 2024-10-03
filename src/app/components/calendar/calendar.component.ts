import { Component, OnInit, } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { MatCalendar, MatCalendarBody, MatCalendarCell } from '@angular/material/datepicker';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
   imports: [MatCalendar,MatCalendarBody, CalendarComponent, NgComponentOutlet],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit{
  days: any[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
      this.loadDays();
  }

  loadDays(): void {
    this.reservationService.getReservations().subscribe(data => {
      this.days = data;
    });
  }

  onDateSelected(event: any): void {
    const selectedDate = event;
    this.reservationService.setSelectedDate(selectedDate);
  }

}
