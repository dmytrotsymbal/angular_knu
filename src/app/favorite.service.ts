import { Injectable } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { WeatherResponse } from './weatherResponse';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorite: WeatherResponse[] = []
  constructor() { }

  private observervators: WeatherComponent[] = []

  public subscribe(subscriber: WeatherComponent) {
    this.observervators.push(subscriber)
  }

  add(record: WeatherResponse) {
    this.favorite.push(record)
    this.observervators.forEach(subscriber => {
      subscriber.alertFavorite(record.name)
    })
  }

  hasRecord(item: WeatherResponse): boolean {
    if (this.favorite.find(record => record.name === item.name)) {
      return true
    }
    return false
  }
}
