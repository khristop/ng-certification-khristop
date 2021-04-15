import { Component, EventEmitter, Input, Output } from "@angular/core";
import { WeatherResponse } from "../../core/models/weather-api.model";
import { MeasurementUnit } from "../../core/models/weather.model";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"]
})
export class WeatherCardComponent {
  @Input() weatherInfo: WeatherResponse;
  @Input() measureUnit: MeasurementUnit;
  @Output() removeLocation = new EventEmitter<WeatherResponse>();
}
