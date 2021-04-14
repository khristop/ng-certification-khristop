import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "../services/storage.service";
import { WeatherAPIService } from "../services/weather-api.service";

@Injectable()
export class WeatherService {
  private locationsKey = "locations";
  private locationsSelected$ = new BehaviorSubject<string[]>(
    this.getLocations()
  );
  get locations() {
    return this.locationsSelected$.getValue();
  }
  locations$ = this.locationsSelected$.asObservable();

  constructor(
    private storage: StorageService,
    private weatherAPIService: WeatherAPIService
  ) {}

  private saveLocations(): void {
    this.storage.save(this.locationsKey, JSON.stringify(this.locations));
  }

  getLocations(): string[] {
    const locationsSaved = this.storage.get(this.locationsKey);
    return locationsSaved ? JSON.parse(locationsSaved) : [];
  }

  addLocation(newLocation: string): void {
    let locations = this.locations;
    if (locations.includes(newLocation)) {
      return; // return some error
    }
    this.locationsSelected$.next([...locations, newLocation]);
    this.saveLocations();
    this.weatherAPIService.getWeatherByZipcode(newLocation).subscribe(data => {
      console.log(data);
    });
  }
}
