import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationClimateComponent } from './location-climate/location-climate.component';
import { LocationForecastComponent } from './location-forecast/location-forecast.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LocationFormComponent, LocationClimateComponent, LocationForecastComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
