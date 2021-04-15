import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationForecastRoutesModule } from "./forecast-routing.module";
import { ForecastComponent } from "./forecast/forecast.component";

@NgModule({
  imports: [CommonModule, LocationForecastRoutesModule],
  declarations: [ForecastComponent]
})
export class ForecastModule {}
