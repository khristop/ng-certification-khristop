import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: "forecast",
    loadChildren: () =>
      import("./forecast/forecast.module").then(m => m.ForecastModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
