import { Injectable } from "@angular/core";
import { BehaviorSubject, merge } from "rxjs";
import { WeatherResponse } from "../models/weather-api.model";
import { StorageService } from "../services/storage.service";
import { WeatherAPIService } from "../services/weather-api.service";

@Injectable()
export class WeatherService {
  private locationsKey = "locations";
  private zipcodes = this.getLocations();

  private locationWeathersSubject$ = new BehaviorSubject<WeatherResponse[]>([]);
  private get locationWeathers() {
    return this.locationWeathersSubject$.getValue();
  }
  locationWeathers$ = this.locationWeathersSubject$.asObservable();

  constructor(
    private storage: StorageService,
    private weatherAPIService: WeatherAPIService
  ) {
    this.fetchData();
  }

  protected fetchData() {
    if (this.zipcodes) {
      const observers = this.zipcodes.map(zipcode =>
        this.weatherAPIService.getWeatherByZipcode(zipcode)
      );

      merge(...observers).subscribe(weatherData => {
        this.locationWeathersSubject$.next([
          ...this.locationWeathers,
          weatherData
        ]);
      });
    }
  }

  private saveLocations(locations: string[]): void {
    this.storage.save(this.locationsKey, JSON.stringify(locations));
  }

  getLocations(): string[] {
    const locationsSaved = this.storage.get(this.locationsKey);
    return locationsSaved ? JSON.parse(locationsSaved) : [];
  }

  addLocation(newLocationZipcode: string): void {
    if (this.zipcodes.includes(newLocationZipcode)) {
      return; // return some error or display zipcode already selected
    }
    this.weatherAPIService
      .getWeatherByZipcode(newLocationZipcode)
      .subscribe((weatherData: WeatherResponse) => {
        this.locationWeathersSubject$.next([
          ...this.locationWeathers,
          weatherData
        ]);
        this.saveLocations([...this.zipcodes, newLocationZipcode]);
      });
  }
}
