import { InjectionToken } from "@angular/core";
import { MeasurementUnit } from "../models/weather.model";

export const MEASUREMNT_UNIT = new InjectionToken<MeasurementUnit>(
  "Measumernt token"
);
