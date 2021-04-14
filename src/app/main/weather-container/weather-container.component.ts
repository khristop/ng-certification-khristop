import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-container",
  templateUrl: "./weather-container.component.html",
  styleUrls: ["./weather-container.component.css"]
})
export class WeatherContainerComponent implements OnInit {
  locationsWeather: Observable<any[]>;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.locationsWeather = this.weatherService.locations$;
  }

  addLocation(zipcode: string) {
    this.weatherService.addLocation(zipcode);
  }
}
