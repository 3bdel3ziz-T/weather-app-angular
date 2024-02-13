import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { List, WeatherStatus } from '../models/weather';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public weatherData: HttpClient) { }

  getWeather(cityName: string): Observable<WeatherStatus> {
    return this.weatherData.get<WeatherStatus>
      (`${environment.api.url}?q=${cityName}&appid=${environment.api.Key}&units=metric`);
  }

  changeIconCode(arr: List[]) {
    arr.map((e: List) =>
      e.weather[0].icon = this.getWeatherIcon(e.weather[0].icon))
  }
  getWeatherIcon(iconCode: string): string {
    const statusIcon: any = {
      "01d": "sun",
      "02d": "sun",

      "01n": "moon",
      "02n": "moon",

      "03d": "cloud",
      "04d": "cloud",
      "03n": "cloud",
      "04n": "cloud",

      "09d": "cloud-rain",
      "10d": "cloud-rain",
      "09n": "cloud-rain",
      "10n": "cloud-rain",

      "11d": "cloud-lightning",
      "11n": "cloud-lightning",

      "13d": "cloud-snow",
      "13n": "cloud-snow",

    }
    return `bx bx-${statusIcon[iconCode]}`
  }
}

