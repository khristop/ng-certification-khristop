import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationClimateComponent } from "./location-climate/location-climate.component";
import { LocationFormComponent } from "./location-form/location-form.component";
import { MainComponent } from "./main/main.component";
import { MainRoutesModule } from "./main-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, MainRoutesModule, FormsModule],
  declarations: [LocationClimateComponent, LocationFormComponent, MainComponent]
})
export class MainModule {}
