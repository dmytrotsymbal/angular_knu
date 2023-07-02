import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherResponse } from '../weatherResponse';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  asText: string = ""
  constructor(@Inject(MAT_DIALOG_DATA) public data: WeatherResponse) { }

  ngOnInit(): void {
    this.asText = JSON.stringify(this.data)
  }
}
