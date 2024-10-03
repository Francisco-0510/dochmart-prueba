import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/reservations';
  private usersApiUrl = 'https://localhost:3000/userReservations';
  private selectedDate: any;
  private lastReservation: any;

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTimesForDate(date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?date=${date}`);
  }

  setSelectedDate(date: string): void {
    this.selectedDate = date;
  }

  getSelectedDate(): any {
    return this.selectedDate;
  }

  createReservation(reservation: any): Observable<any> {
    this.lastReservation = reservation;
    return this.http.post(this.usersApiUrl, reservation);
  }

  getLastReservation(): any {
    return this.lastReservation;
  }

  getPreviousReservations(): Observable<any> {
    return this.http.get(this.usersApiUrl);
  }
}
