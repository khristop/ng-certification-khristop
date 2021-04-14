import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { WeatherResponse } from "../models/weather-api.model";

@Injectable({
  providedIn: "root"
})
export class WeatherAPIService {
  private weatherAPI = environment.weatherAPI + "weather";

  constructor(private httpClient: HttpClient) {}

  getWeatherByZipcode(zipcode: string): Observable<WeatherResponse> {
    let params = new HttpParams().set("zip", zipcode);
    return this.httpClient.get<WeatherResponse>(this.weatherAPI, {
      params
    });
  }
}
