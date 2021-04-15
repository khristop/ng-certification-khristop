import { Coordinate } from "./common-api.model";
import { Weather } from "./weather.model";

export interface City {
  id: number;
  name: string;
  coord: Coordinate;
  country: string;
  population: number;
}

export interface TemperatureData {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface ForecastDay {
  dt: number;
  temp: TemperatureData;
  pressure: number;
  humidity: number;
  weather: Weather;
  speed: number;
  deg: number;
  clouds: number;
  rain: number;
}

export interface ForecastResponse {
  city: City;
  cod: string;
  message: number;
  cnt: number;
  list: ForecastDay[];
}
