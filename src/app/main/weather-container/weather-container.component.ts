import { Component, Inject, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherResponse } from "../../core/models/weather-api.model";
import { MeasurementUnit } from "../../core/models/weather.model";
import { MEASUREMNT_UNIT } from "../../core/tokens/measurement-unit.token";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-container",
  templateUrl: "./weather-container.component.html",
  styleUrls: ["./weather-container.component.css"]
})
export class WeatherContainerComponent implements OnInit {
  locationsWeather: Observable<WeatherResponse[]> = this.weatherService
    .locationWeathers$;

  constructor(
    private weatherService: WeatherService,
    @Inject(MEASUREMNT_UNIT) public measurmentUnit: MeasurementUnit
  ) {}

  ngOnInit() {}

  addLocation(zipcode: string) {
    this.weatherService.addLocation(zipcode);
  }
}
