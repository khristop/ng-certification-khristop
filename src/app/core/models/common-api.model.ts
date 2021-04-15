export interface Coordinate {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ErrorMessage {
  cod: string;
  message: string;
}
