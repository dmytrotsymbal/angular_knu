import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteService } from './favorite.service';

const appRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'favorite', component: FavoriteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailsComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [FavoriteService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private service: FavoriteService) {}
}
