import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';
import { ReservationsListComponent } from './components/reservation-list/reservation-list.component';

@NgModule({
  declarations: [
   
    ReservationSummaryComponent,
    ReservationsListComponent
  ],
  imports: [
    
  ],
  providers: [],
  bootstrap: [],

})
export class AppModule {}
