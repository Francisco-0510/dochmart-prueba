import { MatCalendarBody, MatDatepicker } from '@angular/material/datepicker';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCalendarBody, MatToolbar,MatDatepicker],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dochmart-prueba';
}
