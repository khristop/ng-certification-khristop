import { Inject, Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { MEASUREMNT_UNIT } from "../tokens/measurement-unit.token";
import { MeasurementUnit } from "../models/weather.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class WeatherAPIInterceptor implements HttpInterceptor {
  private weatherAPIUrl = environment.weatherAPI;
  private weatherAPIKey = environment.weatherAPIKey;

  constructor(
    @Inject(MEASUREMNT_UNIT) private measurmentUnit: MeasurementUnit
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes(this.weatherAPIUrl)) {
      req = req.clone({
        setParams: {
          appid: this.weatherAPIKey,
          units: this.measurmentUnit
        }
      });
    }
    return next.handle(req);
  }
}
