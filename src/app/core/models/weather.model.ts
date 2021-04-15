import { WeatherResponse } from "./weather-api.model";

export interface Weather extends WeatherResponse {
  zipcode: number;
}

export type MeasurementUnit = "standard" | "metric" | "imperial";
