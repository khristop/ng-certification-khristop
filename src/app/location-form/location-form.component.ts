import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-location-form",
  templateUrl: "./location-form.component.html",
  styleUrls: ["./location-form.component.css"]
})
export class LocationFormComponent implements OnInit {
  zipcodeControl = "";

  constructor() {}

  ngOnInit() {}

  addLocation(newZipcode: string) {}
}
