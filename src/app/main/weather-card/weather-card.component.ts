import { Component, Input, OnInit } from "@angular/core";
import { WeatherResponse } from "../../models/weather-api.model";
import { MeasurementUnit } from "../../models/weather.model";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"]
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherInfo: WeatherResponse;
  @Input() measureUnit: MeasurementUnit;

  ngOnInit() {
    console.log(this.weatherInfo);
  }
}
