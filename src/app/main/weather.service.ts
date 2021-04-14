import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "../services/storage.service";

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

  constructor(private storage: StorageService) {}

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
  }
}
