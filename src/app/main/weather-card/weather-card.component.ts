import { Component, Input, OnInit } from "@angular/core";
import { WeatherResponse } from "../../models/weather-api.model";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"]
})
export class WeatherCardComponent {
  @Input() weatherInfo: WeatherResponse;
}
