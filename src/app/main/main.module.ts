import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainRoutesModule } from "./main-routing.module";
import { FormsModule } from "@angular/forms";

import { WeatherContainerComponent } from "./weather-container/weather-container.component";
import { WeatherCardComponent } from "./weather-card/weather-card.component";
import { LocationFormComponent } from "./location-form/location-form.component";

@NgModule({
  imports: [CommonModule, MainRoutesModule, FormsModule],
  declarations: [
    WeatherCardComponent,
    LocationFormComponent,
    WeatherContainerComponent
  ]
})
export class MainModule {}