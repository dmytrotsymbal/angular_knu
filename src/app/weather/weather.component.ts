import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from '../weatherResponse';
import { WeatherService } from '../weather.service';
import { MatDialog } from '@angular/material/dialog';
import { WeatherDetailsComponent } from '../weather-details/weather-details.component';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private favoriteService: FavoriteService,
    public dialog: MatDialog
  ) {}

  cities = [
    4303602, 588409, 703448, 2950159, 3169070, 3067696, 864485, 2643743, 702550,
    2267057, 3117735,
  ];
  weather: WeatherResponse[] = [];
  columnsToDisplay: string[] = ['city', 'temp', 'weather', 'wind', 'favorite'];
  loadCompleted: boolean = false;

  ngOnInit(): void {
    this.getWeather();
    this.favoriteService.subscribe(this);
  }

  addToFavorite(event: any, item: WeatherResponse) {
    event.stopPropagation();
    this.favoriteService.add(item);
  }

  isFavorite(item: WeatherResponse): boolean {
    return this.favoriteService.hasRecord(item);
  }

  openDialog(item: WeatherResponse): void {
    this.dialog.open(WeatherDetailsComponent, {
      data: item,
    });
  }

  getWeather(): void {
    this.weatherService.getWeather(this.cities).subscribe({
      next: (data: any) => (this.weather = data['list']),
      complete: () => (this.loadCompleted = true),
    });
  }

  alertFavorite(city: string) {
    alert(`You've just made ${city} your favorite`);
  }
}
