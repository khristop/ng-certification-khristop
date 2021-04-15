import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { WeatherAPIInterceptor } from "./interceptors/weather-api.interceptor";
import { MEASUREMNT_UNIT } from "./tokens/measurement-unit.token";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherAPIInterceptor,
      multi: true
    },
    {
      provide: MEASUREMNT_UNIT,
      useValue: "metric"
    }
  ]
})
export class CoreModule {}
