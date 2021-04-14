import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class WeatherAPIService {
  private weatherAPI = environment.weatherAPI + "weather";

  constructor(private httpClient: HttpClient) {}

  getWeatherByZipcode(zipcode: string) {
    let params = new HttpParams().set("zip", zipcode);
    return this.httpClient.get(this.weatherAPI, {
      params
    });
  }
}
