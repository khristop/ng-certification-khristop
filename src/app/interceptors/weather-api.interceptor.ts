import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class WeatherAPIInterceptor implements HttpInterceptor {
  private weatherAPIUrl = environment.weatherAPI;
  private weatherAPIKey = environment.weatherAPIKey;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes(this.weatherAPIUrl)) {
      req = req.clone({
        setParams: {
          appid: this.weatherAPIKey
        }
      });
    }
    return next.handle(req);
  }
}
