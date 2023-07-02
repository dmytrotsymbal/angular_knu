import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient){ }

  getWeather(cities: number[]) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/group?id=${cities.join()}&units=metric&appid=87b374b4887782a29eac85f003c09012`
    )
  }
}
