import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ForecastResponse } from "../core/models/forecast-api.model";
import { WeatherAPIService } from "../core/services/weather-api.service";

@Injectable({ providedIn: "root" })
export class ForecastResolver implements Resolve<ForecastResponse> {
  constructor(private weatherAPIService: WeatherAPIService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ForecastResponse> {
    const zipcode = route.paramMap.get("zipcode");
    return this.weatherAPIService.getForecastByZipcode(zipcode);
  }
}
