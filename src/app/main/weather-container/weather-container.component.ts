import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherResponse } from "../../models/weather-api.model";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-container",
  templateUrl: "./weather-container.component.html",
  styleUrls: ["./weather-container.component.css"]
})
export class WeatherContainerComponent implements OnInit {
  locationsWeather: Observable<WeatherResponse[]> = this.weatherService
    .locationWeathers$;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  addLocation(zipcode: string) {
    this.weatherService.addLocation(zipcode);
  }
}
