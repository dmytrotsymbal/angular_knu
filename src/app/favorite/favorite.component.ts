import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherResponse } from '../weatherResponse';
import { FavoriteService } from '../favorite.service';
import { MatDialog } from '@angular/material/dialog';
import { WeatherDetailsComponent } from '../weather-details/weather-details.component';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  columnsToDisplay: string[] = ['city', 'temp', 'weather', 'wind']
  @ViewChild(MatTable) table: MatTable<any>
  
  constructor(
    public favoriteService: FavoriteService, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.favoriteService.favorite)
  }

  renderFavs() {
    this.table.renderRows()
  }

  openDialog(item: WeatherResponse): void {
    this.dialog.open(WeatherDetailsComponent, {
      data: item
    })
  }
}
