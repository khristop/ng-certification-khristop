import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutesModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { WeatherAPIInterceptor } from "./interceptors/weather-api.interceptor";
import { MEASUREMNT_UNIT } from "./tokens/measurement-unit.token";

@NgModule({
  imports: [BrowserModule, CommonModule, AppRoutesModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
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
export class AppModule {}
