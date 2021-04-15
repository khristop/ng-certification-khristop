import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForecastComponent } from "./forecast/forecast.component";

const routes: Routes = [
  {
    path: ":id",
    component: ForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationForecastRoutesModule {}
