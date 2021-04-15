import { Component, Inject, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherResponse } from "../../core/models/weather-api.model";
import { MeasurementUnit, Weather } from "../../core/models/weather.model";
import { MEASUREMENT_UNIT } from "../../core/tokens/measurement-unit.token";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-container",
  templateUrl: "./weather-container.component.html",
  styleUrls: ["./weather-container.component.css"]
})
export class WeatherContainerComponent implements OnInit {
  locationsWeather: Observable<Weather[]> = this.weatherService
    .locationWeathers$;

  constructor(
    private weatherService: WeatherService,
    @Inject(MEASUREMENT_UNIT) public measurmentUnit: MeasurementUnit
  ) {}

  ngOnInit() {}

  addLocation(zipcode: string) {
    this.weatherService.addLocation(zipcode);
  }

  removeLocation({ zipcode }: Weather) {
    this.weatherService.removeLocationByZipcode(zipcode);
  }
}
