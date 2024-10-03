import { Component, NgModule, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInputModule, MatButtonModule, NgModel],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
})
export class ReservationFormComponent implements OnInit {
  availableTimes: any[] = [];
  selectedDate: any;
  userData = { name: '', email: '', phone: '' };

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.selectedDate = this.reservationService.getSelectedDate();
    this.loadTimes();
  }

  loadTimes(): void {
    this.reservationService
      .getTimesForDate(this.selectedDate)
      .subscribe((data) => {
        this.availableTimes = data;
      });
  }

  submitForm(): void {
    this.reservationService
      .createReservation({
        date: this.selectedDate,
        userData: this.userData,
      })
      .subscribe(() => {
        // Redirigir al resumen de reserva
      });
  }
}
